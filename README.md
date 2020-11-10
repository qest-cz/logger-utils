# logger-utils

Collection of utils for logging written in Node.js and Typescript.

## Docs

All docs except Readme should be pulled from the code typedoc, so you can use that as a reference.

## Quickstart

1. `yarn add @qest/logger-utils` or `npm install @qest/logger-utils`
2. You can use one of the provided logger implementations:
```typescript
import {
  Level,
  PinoLogger,
  PinoLoggerSentryStream,
  BaseLogObject,
} from "@qest/logger-utils";

const logger = new PinoLogger({
  level: Level.DEBUG,
  outputStreams: [
    { level: Level.DEBUG, enabled: true, stream: process.stdout },
    {
      // Don't be fooled by the level provided here!!!
      // This sentry stream will send all objects containing a `stack` (mostly errors) property to Sentry. 
      // Other messages and objects (above this level) will be logged as breadcrumbs.
      level: Level.DEBUG,
      enabled: true,
      stream: new PinoLoggerSentryStream({
        serverName: "<SOME_SERVER_NAME>",
        dsn: "<SENTRY_DSN>",
        enableDedupe: true,
        environment: "Alpha",
        ...otherSentryOptions,
      }),
    },
  ],
  ...otherPinoOptions,
});

logger.debug(`Some debugging message`);

// We can also log compatible objects
logger.debug({
  msg: "Some message",
  level: 0,
  time: Date.now(),
} as BaseLogObject);

```

// TODO