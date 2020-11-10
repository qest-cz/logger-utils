import * as Bunyan from 'bunyan';

export namespace BunnyanSerializers {
    export const stdSerializers = (): Bunyan.StdSerializers => {
        return {
            ...Bunyan.stdSerializers,
            err: (err: any): any => {
                if (!err || !err.stack) {
                    return err;
                }
                const obj = {
                    ...err,
                    message: err.message,
                    stack: getFullErrorStack(err),
                };
                return obj;
            },
        };
    };

    export const getFullErrorStack = (ex: any) => {
        let ret = ex.stack || ex.toString();
        if (ex.cause && typeof ex.cause === 'function') {
            const cex = ex.cause();
            if (cex) {
                ret += `\nCaused by: ${getFullErrorStack(cex)}`;
            }
        }
        return ret;
    };
}
