# Logger-utils

Collection of utils for logging written in Node.js and Typescript.

### Installation
Install package to our dependencies from `npm`.

```
yarn add @qest/logger-utils
```
or 
```
npm install @qest/logger-utils
```

### How to configure logger - example

```
const logger: ILogger = new PinoLogger({
  level: Level.INFO,
  name: string,
  outputStreams?: [
    {
      level: Level.DEBUG,
      stream:  createWriteStream(''/var/log/your-app/event.log''),
      enabled: true
    }
    ...
  ],
  usePinoSerialized?: true,
});

// for more configuration options see https://getpino.io/#/docs/api?id=options
```

### Usage

```
  logger.error('Some error occured.', e);
```
or
```
  logger.info('Server is listening at %s', 4000);
```
etc.