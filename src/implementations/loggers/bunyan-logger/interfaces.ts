import { LoggerOptions, LogLevel } from 'bunyan';
import { CustomLoggerStream } from '../../../lib/loggers/interfaces';

export interface BunyanLoggerOption extends LoggerOptions {
    /**
     * Passed straight to the underlying logger. See the [Bunyan logger docs](https://github.com/trentm/node-bunyan#levels) for more info.
     */
    level: LogLevel;
    /**
     * You can use some of our implemented streams like {@link PinoLoggerSentryStream} or you can even use `process.stdout`.
     *
     * See {@link CustomLoggerStream} for more info.
     */
    outputStreams: CustomLoggerStream[];
}
