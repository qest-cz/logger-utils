import * as pino from 'pino';
import { multistream } from 'pino-multi-stream';
import { ILogger, IPinoLoggerOptions } from '../interfaces';

export class PinoLogger implements ILogger {
    private pino: pino.Logger;
    private options: IPinoLoggerOptions;

    constructor(options: IPinoLoggerOptions) {
        this.options = options;

        const { outputStreams, ...baseOptions } = this.options;

        const pinoOptions = {
            timestamp: () => `,"time":"${new Date().toISOString()}"`,
            ...(options.usePinoSerialized
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

        this.pino = options.outputStreams
            ? pino(pinoOptions, multistream(outputStreams.filter((e) => e && e.enabled !== undefined && e.enabled === true)))
            : pino(pinoOptions);
    }

    public fatal(msg, ...args: any[]): void {
        this.pino.fatal(msg, ...args);
    }

    public error(msg, ...args: any[]): void {
        this.pino.error(msg, ...args);
    }

    public warn(msg, ...args: any[]): void {
        this.pino.warn(msg, ...args);
    }

    public info(msg, ...args: any[]): void {
        this.pino.info(msg, ...args);
    }

    public debug(msg, ...args: any[]): void {
        this.pino.debug(msg, ...args);
    }

    public trace(msg, ...args: any[]): void {
        this.pino.trace(msg, ...args);
    }
}
