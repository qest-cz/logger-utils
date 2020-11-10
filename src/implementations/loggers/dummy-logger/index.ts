import { Logger } from '../../../lib';

export class DummyLogger implements Logger {
    debug(msg: string | object | Error, ...args: any[]) {
        // nothing to log
    }

    error(msg: string | object | Error, ...args: any[]) {
        // nothing to log
    }

    fatal(msg: string | object | Error, ...args: any[]) {
        // nothing to log
    }

    info(msg: string | object | Error, ...args: any[]) {
        // nothing to log
    }

    trace(msg: string | object | Error, ...args: any[]) {
        // nothing to log
    }

    warn(msg: string | object | Error, ...args: any[]) {
        // nothing to log
    }
}
