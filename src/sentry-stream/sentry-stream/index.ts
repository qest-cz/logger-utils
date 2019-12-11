import * as Sentry from '@sentry/node';
import { NodeOptions } from '@sentry/node/dist/backend';
import { BasicWriteStream } from '../../basic-write-stream';
import { IErrorObject, IFlatLogObject, ISentryBreadcrumb, ISentryStreamOptions } from '../../interfaces';

export abstract class SentryStream extends BasicWriteStream implements NodeJS.WriteStream {
    public static isSentryStreamEnabled(dsn: string) {
        return Boolean(dsn) && dsn.length > 0;
    }

    constructor({ enableDedupe, ...sentryInit }: ISentryStreamOptions) {
        super();
        const config: NodeOptions = sentryInit;
        if (!enableDedupe) {
            config.integrations = (integrations) => integrations.filter((integration) => integration.name !== 'Dedupe');
        }
        Sentry.init({ ...config });
    }

    public write(recordString: string | Buffer) {
        const record = this.makeObject(recordString);
        if (record === null) {
            return;
        }

        const level = this.getSentryLevel(record.level);
        const err = this.deserializeError(record);

        if (record.stack) {
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
                    scope.addEventProcessor((event) => Sentry.Handlers.parseRequest(event, record.req) as Promise<Sentry.Event>);
                }
                this.setExtrasFromRecord(record, scope);
                if (record.payload) {
                    delete err.payload;
                }

                scope.setFingerprint(this.makeFingerPrint(err));
                Sentry.captureException(err);
            });
        } else {
            this.captureBreadcrumb({
                level: record.level,
                category: 'log',
                message: JSON.stringify(record),
            });
        }
        return true;
    }

    public captureBreadcrumb(object: ISentryBreadcrumb) {
        const level = this.getSentryBreadcrumbLevel(object.level);
        Sentry.addBreadcrumb({
            ...object,
            level,
        });
    }

    protected abstract makeObject(record: any): IFlatLogObject;

    protected deserializeError(data: IFlatLogObject): IErrorObject {
        const { msg, v, hostname, level, pid, req, user, time, code, ...rest } = data;
        if (!rest.stack) {
            return null;
        }
        const error: any = new Error(msg);
        Object.keys(rest).forEach((k) => {
            error[k] = <any>rest[k];
        });
        return error as IErrorObject;
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

    protected makeFingerPrint(err: IErrorObject): string[] {
        if (err.fingerprint) {
            return [err.fingerprint];
        }
        const stackNoFirstLine = err.stack.replace(/[\w\W]+?\n+?/, '');
        return [err.name, err.type, stackNoFirstLine];
    }

    protected getSentryBreadcrumbLevel(level: number | string): Sentry.Severity {
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

    private setExtrasFromRecord(record: IFlatLogObject, scope: Sentry.Scope) {
        const skip = ['hostname', 'level', 'msg', 'message', 'code', 'name', 'pid', 'stack', 'time', 'type', 'v', 'req', 'user', 'node'];
        Object.keys(record).forEach((k) => {
            if (skip.indexOf(k) === -1) {
                scope.setExtra(k, record[k]);
            }
        });
    }
}
