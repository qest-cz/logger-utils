import { AbstractSentryStreamBase, SentryStreamOptions } from '../../../lib';
import { FlatLogObject } from '../../object-formats/interfaces';
import { makeObject } from '../bunyan-pino-utils';

/**
 * Will send logged information to Sentry based on the provided options ({@link SentryStreamOptions}).
 * Also see {@link AbstractSentryStreamBase} for more information about what objects are sent to the Sentry.
 *
 * Use this stream with the {@link PinoLogger}
 */
export class PinoLoggerSentryStream extends AbstractSentryStreamBase {
    /**
     * See the class description for more info
     */
    constructor(args: SentryStreamOptions) {
        super(args);
    }

    protected makeObject(recordString: string): FlatLogObject | null {
        return makeObject(recordString);
    }
}
