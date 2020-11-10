import * as pino from 'pino';
import { multistream } from 'pino-multi-stream';
import { Logger, MsgType } from '../../../lib';
import { PinoLoggerOptions } from './interfaces';
export * from './interfaces';

export class PinoLogger implements Logger {
    private pino: pino.Logger;
    private options: PinoLoggerOptions;

    constructor(options: PinoLoggerOptions) {
        this.options = options;

        const {
            outputStreams,
            usePinoStdSerializers,
            ...baseOptions
        } = this.options;

        const pinoOptions: pino.LoggerOptions = {
            timestamp: () => `,"time":"${new Date().toISOString()}"`,
            ...(usePinoStdSerializers
                ? {
                      serializers: {
                          err: pino.stdSerializers.err,
                          error: pino.stdSerializers.err,
                          res: pino.stdSerializers.res,
                          req: pino.stdSerializers.req,
                      },
                  }
                : {}),
            ...baseOptions,
        };

        this.pino = outputStreams
            ? pino(
                  pinoOptions,
                  multistream(
                      outputStreams.filter((e) => e && e.enabled === true),
                  ),
              )
            : pino(pinoOptions);
    }

    public fatal(msg: MsgType, ...args: any[]): void {
        this.pino.fatal(JSON.stringify(msg), ...args);
    }

    public error(msg: MsgType, ...args: any[]): void {
        this.pino.error(JSON.stringify(msg), ...args);
    }

    public warn(msg: MsgType, ...args: any[]): void {
        this.pino.warn(JSON.stringify(msg), ...args);
    }

    public info(msg: MsgType, ...args: any[]): void {
        this.pino.info(JSON.stringify(msg), ...args);
    }

    public debug(msg: MsgType, ...args: any[]): void {
        this.pino.debug(JSON.stringify(msg), ...args);
    }

    public trace(msg: MsgType, ...args: any[]): void {
        this.pino.trace(JSON.stringify(msg), ...args);
    }
}
