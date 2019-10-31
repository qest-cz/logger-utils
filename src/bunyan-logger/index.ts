import * as Bunyan from 'bunyan';
import { BunnyanSerializers } from '../bunyan-serializers';
import { IBunyanLoggerOption, ILogger } from '../interfaces';

export class BunyanLogger extends Bunyan implements ILogger {
    constructor(options: IBunyanLoggerOption) {
        const { outputStreams, ...bunyanOptions } = options;
        super({
            streams: outputStreams.filter((stream) => stream.enabled === true),
            serializers: BunnyanSerializers.stdSerializers(),
            ...bunyanOptions,
        });
    }
}
