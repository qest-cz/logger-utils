import { LevelWithSilent, LoggerOptions } from 'pino';
import { CustomLoggerStream } from '../../../lib';

export interface PinoLoggerOptions extends LoggerOptions {
    /**
     * This will be applied across all output streams, 
     * this means that this level has to be more verbose than all the individual stream levels.
     * Otherwise some info might not get logged.
     *
     * Please see [Pino multi-stream](https://github.com/pinojs/pino-multi-stream) for more info.
     */
    level: LevelWithSilent;
    /**
     * You can use some of our implemented streams like {@link PinoLoggerSentryStream} or you can even use `process.stdout`.
     * 
     * See {@link CustomLoggerStream} for more info.
     */
    outputStreams?: CustomLoggerStream[];
    /**
     * Should the [standard Pino serializers](https://github.com/pinojs/pino/blob/master/docs/api.md#pino-stdserializers)
     * be passed to the [Pino serializers option](https://github.com/pinojs/pino/blob/master/docs/api.md#serializers-object)?
     */
    usePinoStdSerializers?: boolean;
}
