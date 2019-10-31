import * as Bunyan from 'bunyan';

export class BunnyanSerializers {
    public static stdSerializers(): Bunyan.StdSerializers {
        return {
            ...Bunyan.stdSerializers,
            err: (err: any): any => {
                if (!err || !err.stack) {
                    return err;
                }
                const obj = {
                    ...err,
                    message: err.message,
                    stack: BunnyanSerializers.getFullErrorStack(err),
                };
                return obj;
            },
        };
    }

    private static getFullErrorStack(ex: any) {
        let ret = ex.stack || ex.toString();
        if (ex.cause && typeof ex.cause === 'function') {
            const cex = ex.cause();
            if (cex) {
                ret += `\nCaused by: ${BunnyanSerializers.getFullErrorStack(cex)}`;
            }
        }
        return ret;
    }
}
