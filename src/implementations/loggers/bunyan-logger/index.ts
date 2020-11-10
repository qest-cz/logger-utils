import * as Bunyan from 'bunyan';
import { Logger } from '../../../lib';
import { BunnyanSerializers } from './bunyan-serializers';
import { BunyanLoggerOption } from './interfaces';
export * from './interfaces';

export class BunyanLogger extends Bunyan implements Logger {
    constructor(options: BunyanLoggerOption) {
        const { outputStreams, ...bunyanOptions } = options;
        super({
            streams: outputStreams.filter((stream) => stream.enabled === true),
            serializers: BunnyanSerializers.stdSerializers(),
            ...bunyanOptions,
        });
    }
}
