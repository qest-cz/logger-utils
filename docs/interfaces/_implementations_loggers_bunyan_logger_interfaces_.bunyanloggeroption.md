**[@qest/logger-utils](../README.md)**

> [Globals](../README.md) / ["implementations/loggers/bunyan-logger/interfaces"](../modules/_implementations_loggers_bunyan_logger_interfaces_.md) / BunyanLoggerOption

# Interface: BunyanLoggerOption

## Hierarchy

* [LoggerOptions](_implementations_loggers_bunyan_logger_index_.bunyanlogger.loggeroptions.md)

  ↳ **BunyanLoggerOption**

## Indexable

▪ [custom: string]: any

## Index

### Properties

* [level](_implementations_loggers_bunyan_logger_interfaces_.bunyanloggeroption.md#level)
* [name](_implementations_loggers_bunyan_logger_interfaces_.bunyanloggeroption.md#name)
* [outputStreams](_implementations_loggers_bunyan_logger_interfaces_.bunyanloggeroption.md#outputstreams)
* [serializers](_implementations_loggers_bunyan_logger_interfaces_.bunyanloggeroption.md#serializers)
* [src](_implementations_loggers_bunyan_logger_interfaces_.bunyanloggeroption.md#src)
* [stream](_implementations_loggers_bunyan_logger_interfaces_.bunyanloggeroption.md#stream)
* [streams](_implementations_loggers_bunyan_logger_interfaces_.bunyanloggeroption.md#streams)

## Properties

### level

•  **level**: [LogLevel](../classes/_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#loglevel)

*Overrides [LoggerOptions](_implementations_loggers_bunyan_logger_index_.bunyanlogger.loggeroptions.md).[level](_implementations_loggers_bunyan_logger_index_.bunyanlogger.loggeroptions.md#level)*

*Defined in src/implementations/loggers/bunyan-logger/interfaces.ts:8*

Passed straight to the underlying logger. See the [Bunyan logger docs](https://github.com/trentm/node-bunyan#levels) for more info.

___

### name

•  **name**: string

*Inherited from [BunyanLoggerOption](_implementations_loggers_bunyan_logger_interfaces_.bunyanloggeroption.md).[name](_implementations_loggers_bunyan_logger_interfaces_.bunyanloggeroption.md#name)*

*Defined in node_modules/@types/bunyan/index.d.ts:237*

___

### outputStreams

•  **outputStreams**: [CustomLoggerStream](_lib_loggers_interfaces_.customloggerstream.md)[]

*Defined in src/implementations/loggers/bunyan-logger/interfaces.ts:14*

You can use some of our implemented streams like [PinoLoggerSentryStream](../classes/_implementations_output_streams_pino_logger_sentry_stream_index_.pinologgersentrystream.md) or you can even use `process.stdout`.

See [CustomLoggerStream](_lib_loggers_interfaces_.customloggerstream.md) for more info.

___

### serializers

• `Optional` **serializers**: [Serializers](_implementations_loggers_bunyan_logger_index_.bunyanlogger.serializers.md)

*Inherited from [BunyanLoggerOption](_implementations_loggers_bunyan_logger_interfaces_.bunyanloggeroption.md).[serializers](_implementations_loggers_bunyan_logger_interfaces_.bunyanloggeroption.md#serializers)*

*Defined in node_modules/@types/bunyan/index.d.ts:241*

___

### src

• `Optional` **src**: undefined \| false \| true

*Inherited from [BunyanLoggerOption](_implementations_loggers_bunyan_logger_interfaces_.bunyanloggeroption.md).[src](_implementations_loggers_bunyan_logger_interfaces_.bunyanloggeroption.md#src)*

*Defined in node_modules/@types/bunyan/index.d.ts:242*

___

### stream

• `Optional` **stream**: NodeJS.WritableStream

*Inherited from [BunyanLoggerOption](_implementations_loggers_bunyan_logger_interfaces_.bunyanloggeroption.md).[stream](_implementations_loggers_bunyan_logger_interfaces_.bunyanloggeroption.md#stream)*

*Defined in node_modules/@types/bunyan/index.d.ts:240*

___

### streams

• `Optional` **streams**: [Stream](_implementations_loggers_bunyan_logger_index_.bunyanlogger.stream.md)[]

*Inherited from [BunyanLoggerOption](_implementations_loggers_bunyan_logger_interfaces_.bunyanloggeroption.md).[streams](_implementations_loggers_bunyan_logger_interfaces_.bunyanloggeroption.md#streams)*

*Defined in node_modules/@types/bunyan/index.d.ts:238*
