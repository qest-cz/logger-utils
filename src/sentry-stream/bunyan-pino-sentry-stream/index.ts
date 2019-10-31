import * as Sentry from '@sentry/node';
import { IBaseLogObject, IFlatLogObject, ISentryStreamOptions, IWithErrorLogObject } from '../../interfaces';
import { SentryStream } from '../sentry-stream';

export class BunyanPinoSentryStream extends SentryStream {
    constructor(args: ISentryStreamOptions) {
        super(args);
    }

    protected makeObject(recordString: string): IFlatLogObject {
        const record = this.objectFromStringRecord(recordString);
        if (recordString === null) {
            return;
        }
        return this.makeFlatStructureFromError(record);
    }

    protected objectFromStringRecord(recordString: string): IBaseLogObject {
        try {
            return JSON.parse(recordString);
        } catch (e) {
            Sentry.withScope((scope: Sentry.Scope) => {
                scope.setLevel(Sentry.Severity.Fatal);
                e.recordString = recordString;
                Sentry.captureException(e);
            });
            return null;
        }
    }

    protected makeFlatStructureFromError(data: IWithErrorLogObject | IFlatLogObject): IFlatLogObject {
        if (data.err !== null && typeof data.err === 'object') {
            const { err, ...rest } = data;
            return {
                ...rest,
                ...err,
            };
        }
        return data;
    }
}
