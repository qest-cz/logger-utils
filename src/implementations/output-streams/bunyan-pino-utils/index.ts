import * as Sentry from '@sentry/node';
import {
    BaseLogObject,
    FlatLogObject,
    WithErrorLogObject,
} from '../../object-formats/interfaces';

export const makeObject = (recordString: string): FlatLogObject | null => {
    const record = objectFromStringRecord(recordString);
    if (recordString === null || record === null) {
        return null;
    }
    return makeFlatStructureFromError(record);
};

export const objectFromStringRecord = (recordString: string): BaseLogObject | null => {
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
};

export const makeFlatStructureFromError = (
    data: WithErrorLogObject | FlatLogObject,
): FlatLogObject => {
    if (data.err !== null && typeof data.err === 'object') {
        const { err, ...rest } = data;
        return {
            ...rest,
            ...err,
        };
    }
    return data;
};
