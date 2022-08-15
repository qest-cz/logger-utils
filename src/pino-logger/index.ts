import pino from 'pino';
import { multistream } from 'pino-multi-stream';
import { Formatter, ILogger, IPinoLoggerOptions } from '../interfaces';

export class PinoLogger implements ILogger {
    private pino: pino.Logger;
    private options: IPinoLoggerOptions;
    private logFormatters: Formatter[];

    constructor(options: IPinoLoggerOptions) {
        this.options = options;

        const { outputStreams, logFormatters, ...baseOptions } = this.options;

        this.logFormatters = logFormatters || [];

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
        const formatted = this.useFormatters(msg);
        this.pino.fatal(formatted, ...args);
    }

    public error(msg, ...args: any[]): void {
        const formatted = this.useFormatters(msg);
        this.pino.error(formatted, ...args);
    }

    public warn(msg, ...args: any[]): void {
        const formatted = this.useFormatters(msg);
        this.pino.warn(formatted, ...args);
    }

    public info(msg, ...args: any[]): void {
        const formatted = this.useFormatters(msg);
        this.pino.info(formatted, ...args);
    }

    public debug(msg, ...args: any[]): void {
        const formatted = this.useFormatters(msg);
        this.pino.debug(formatted, ...args);
    }

    public trace(msg, ...args: any[]): void {
        const formatted = this.useFormatters(msg);
        this.pino.trace(formatted, ...args);
    }

    private useFormatters(msg) {
        return this.logFormatters.reduce((previousValue, formatter) => formatter(previousValue), msg);
    }
}
