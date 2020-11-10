import * as Sentry from '@sentry/node';

export interface SentryStreamBaseOptions extends Sentry.NodeOptions {
    /**
     * Should add the Sentry
     * [Dedupe integration](https://docs.sentry.io/platforms/node/configuration/integrations/pluggable-integrations/#dedupe)?
     *
     * @default false
     */
    enableDedupe?: boolean;
}

export interface CustomSentryBreadcrumb extends Omit<Sentry.Breadcrumb, 'level'> {
    /** The only difference from Sentry is that we are using different log levels */
    level: number;
}
