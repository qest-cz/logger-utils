import * as Sentry from '@sentry/node';
import { NodeOptions } from '@sentry/node/dist/backend';
import { ErrorObject, FlatLogObject } from '../../../implementations/object-formats/interfaces';
import { SimpleWriteStreamBase } from '../simple-write-stream-base';
import {  CustomSentryBreadcrumb, SentryStreamBaseOptions } from './interfaces';
export * from './interfaces';

/**
 * Logger agnostic sentry stream base implementation.
 * 
 * You can adapt your logger records by implementing the `makeObject` method.
 * The object returned from `makeObject` will be then captured by Sentry.
 * 
 * This implementation will capture only objects containing a `stack` property!
 * Other objects will be added as breadcrumbs.
 */
export abstract class AbstractSentryStreamBase extends SimpleWriteStreamBase
    implements NodeJS.WriteStream {

    public static isSentryStreamEnabled(dsn: string) {
        return Boolean(dsn) && dsn.length > 0;
    }

    constructor({ enableDedupe = false, ...sentryInit }: SentryStreamBaseOptions) {
        super();
        const config: NodeOptions = sentryInit;
        if (!enableDedupe) {
            config.integrations = (integrations) =>
                integrations.filter(
                    (integration) => integration.name !== 'Dedupe',
                );
        }
        Sentry.init({ ...config });
    }

    public write(recordString: string | Buffer): boolean {
        const record = this.makeObject(recordString);
        if (record === null) {
            return false;
        }

        const level = this.getSentryLevel(record.level);
        const errObject = this.deserializeError(record);

        if (this.shouldCaptureError(errObject)) {
            this.captureError(level, record, errObject);
        } else {
            this.captureBreadcrumb({
                level: record.level,
                category: 'log',
                message: JSON.stringify(record),
            });
        }

        return true;
    }

    public captureBreadcrumb(object: CustomSentryBreadcrumb) {
        const level = this.getSentryBreadcrumbLevel(object.level);
        Sentry.addBreadcrumb({
            ...object,
            level,
        });
    }

    protected abstract makeObject(record: any): FlatLogObject | null;

    protected captureError = (level: Sentry.Severity, record: FlatLogObject, err: ErrorObject) => {
        Sentry.withScope(async (scope: Sentry.Scope) => {
            scope.setLevel(level);
            scope.setTag('time', record.time.toString());
            if (record.hostname) {
                scope.setTag('server_name', record.hostname);
            }
            if (record.code) {
                scope.setTag('code', record.code.toString());
            }
            if (record.user) {
                scope.setUser(record.user);
            }
            if (record.req) {
                if (record.req.ip) {
                    scope.setTag('ip', record.req.ip);
                }
                scope.addEventProcessor(
                    (event) =>
                        Sentry.Handlers.parseRequest(
                            event,
                            record.req!,
                        ) as Promise<Sentry.Event>,
                );
            }
            this.setExtrasFromRecord(record, scope);
            if (err && record.payload) {
                delete err.payload;
            }

            if (err) {
                scope.setFingerprint(this.makeFingerPrint(err));
            }
            Sentry.captureException(err);
        });
    }

    protected deserializeError(data: FlatLogObject): ErrorObject | null {
        const {
            msg,
            v,
            hostname,
            level,
            pid,
            req,
            user,
            time,
            code,
            ...rest
        } = data;

        if (!rest.stack) {
            return null;
        }

        const error: any = new Error(msg);

        Object.keys(rest).forEach((key) => {
            error[key] = <any>rest[key];
        });

        return error as ErrorObject;
    }

    protected getSentryLevel(level: number | string): Sentry.Severity {
        switch (level) {
            case 'trace':
            case 10:
            case 'debug':
            case 20:
                return Sentry.Severity.Debug;
            case 'info':
            case 30:
                return Sentry.Severity.Info;
            case 'warn':
            case 40:
                return Sentry.Severity.Warning;
            case 'error':
            case 50:
                return Sentry.Severity.Error;
            case 'fatal':
            case 60:
            default:
                return Sentry.Severity.Fatal;
        }
    }

    protected makeFingerPrint(err: ErrorObject): string[] {
        if (err.fingerprint) {
            return [err.fingerprint];
        }
        const stackNoFirstLine = err.stack?.replace(/[\w\W]+?\n+?/, '') || 'undefined-stack';
        return [err.name, err.type || 'unknown-type', stackNoFirstLine];
    }

    protected getSentryBreadcrumbLevel(
        level: number | string,
    ): Sentry.Severity {
        switch (level) {
            case 'trace':
            case 10:
            case 'debug':
            case 20:
                return Sentry.Severity.Debug;
            case 'info':
            case 30:
                return Sentry.Severity.Info;
            case 'warn':
            case 40:
                return Sentry.Severity.Warning;
            case 'error':
            case 50:
            case 'fatal':
            case 60:
            default:
                return Sentry.Severity.Error;
        }
    }

    protected shouldCaptureError = (error: ErrorObject | null): error is ErrorObject => {
        return Boolean(error);
    }

    private setExtrasFromRecord(record: FlatLogObject, scope: Sentry.Scope) {
        const skip = [
            'hostname',
            'level',
            'msg',
            'message',
            'code',
            'name',
            'pid',
            'stack',
            'time',
            'type',
            'v',
            'req',
            'user',
            'node',
        ];
        Object.keys(record).forEach((k) => {
            if (skip.indexOf(k) === -1) {
                scope.setExtra(k, record[k]);
            }
        });
    }
}
