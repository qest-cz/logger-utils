**[@qest/logger-utils](../README.md)**

> [Globals](../README.md) / ["implementations/loggers/pino-logger/interfaces"](../modules/_implementations_loggers_pino_logger_interfaces_.md) / PinoLoggerOptions

# Interface: PinoLoggerOptions

## Hierarchy

* LoggerOptions

  ↳ **PinoLoggerOptions**

## Index

### Properties

* [base](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#base)
* [browser](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#browser)
* [changeLevelName](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#changelevelname)
* [customLevels](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#customlevels)
* [enabled](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#enabled)
* [level](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#level)
* [levelVal](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#levelval)
* [messageKey](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#messagekey)
* [name](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#name)
* [outputStreams](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#outputstreams)
* [prettyPrint](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#prettyprint)
* [redact](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#redact)
* [safe](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#safe)
* [serializers](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#serializers)
* [timestamp](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#timestamp)
* [useLevelLabels](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#uselevellabels)
* [useOnlyCustomLevels](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#useonlycustomlevels)
* [usePinoStdSerializers](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#usepinostdserializers)

### Methods

* [onTerminated](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#onterminated)

## Properties

### base

• `Optional` **base**: { [key:string]: any;  } \| null

*Inherited from [PinoLoggerOptions](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md).[base](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#base)*

*Defined in node_modules/@types/pino/index.d.ts:296*

key-value object added as child logger to each log line. If set to null the base child logger is not added

___

### browser

• `Optional` **browser**: undefined \| { asObject?: undefined \| false \| true ; write?: WriteFn \| { debug?: WriteFn ; error?: WriteFn ; fatal?: WriteFn ; info?: WriteFn ; trace?: WriteFn ; warn?: WriteFn  } & { [logLevel:string]: WriteFn;  }  }

*Inherited from [PinoLoggerOptions](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md).[browser](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#browser)*

*Defined in node_modules/@types/pino/index.d.ts:270*

Browser only, see http://getpino.io/#/?id=pino-in-the-browser.

___

### changeLevelName

• `Optional` **changeLevelName**: undefined \| string

*Inherited from [PinoLoggerOptions](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md).[changeLevelName](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#changelevelname)*

*Defined in node_modules/@types/pino/index.d.ts:217*

Changes the property `level` to any string value you pass in. Default: 'level'

___

### customLevels

• `Optional` **customLevels**: undefined \| { [key:string]: number;  }

*Inherited from [PinoLoggerOptions](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md).[customLevels](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#customlevels)*

*Defined in node_modules/@types/pino/index.d.ts:222*

Use this option to define additional logging levels.
The keys of the object correspond the namespace of the log level, and the values should be the numerical value of the level.

___

### enabled

• `Optional` **enabled**: undefined \| false \| true

*Inherited from [PinoLoggerOptions](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md).[enabled](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#enabled)*

*Defined in node_modules/@types/pino/index.d.ts:266*

Enables logging. Default: `true`.

___

### level

•  **level**: LevelWithSilent

*Overrides void*

*Defined in src/implementations/loggers/pino-logger/interfaces.ts:12*

This will be applied across all output streams,
this means that this level has to be more verbose than all the individual stream levels.
Otherwise some info might not get logged.

Please see [Pino multi-stream](https://github.com/pinojs/pino-multi-stream) for more info.

___

### levelVal

• `Optional` **levelVal**: undefined \| number

*Inherited from [PinoLoggerOptions](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md).[levelVal](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#levelval)*

*Defined in node_modules/@types/pino/index.d.ts:246*

When defining a custom log level via level, set to an integer value to define the new level. Default: `undefined`.

___

### messageKey

• `Optional` **messageKey**: undefined \| string

*Inherited from [PinoLoggerOptions](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md).[messageKey](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#messagekey)*

*Defined in node_modules/@types/pino/index.d.ts:250*

The string key for the 'message' in the JSON object. Default: "msg".

___

### name

• `Optional` **name**: undefined \| string

*Inherited from [PinoLoggerOptions](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md).[name](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#name)*

*Defined in node_modules/@types/pino/index.d.ts:191*

The name of the logger. Default: `undefined`.

___

### outputStreams

• `Optional` **outputStreams**: [CustomLoggerStream](_lib_loggers_interfaces_.customloggerstream.md)[]

*Defined in src/implementations/loggers/pino-logger/interfaces.ts:18*

You can use some of our implemented streams like [PinoLoggerSentryStream](../classes/_implementations_output_streams_pino_logger_sentry_stream_index_.pinologgersentrystream.md) or you can even use `process.stdout`.

See [CustomLoggerStream](_lib_loggers_interfaces_.customloggerstream.md) for more info.

___

### prettyPrint

• `Optional` **prettyPrint**: boolean \| PrettyOptions

*Inherited from [PinoLoggerOptions](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md).[prettyPrint](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#prettyprint)*

*Defined in node_modules/@types/pino/index.d.ts:255*

Enables pino.pretty. This is intended for non-production configurations. This may be set to a configuration
object as outlined in http://getpino.io/#/docs/API?id=pretty. Default: `false`.

___

### redact

• `Optional` **redact**: string[] \| redactOptions

*Inherited from [PinoLoggerOptions](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md).[redact](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#redact)*

*Defined in node_modules/@types/pino/index.d.ts:241*

As an array, the redact option specifies paths that should have their values redacted from any log output.

Each path must be a string using a syntax which corresponds to JavaScript dot and bracket notation.

If an object is supplied, three options can be specified:

     paths (String[]): Required. An array of paths
     censor (String): Optional. A value to overwrite key which are to be redacted. Default: '[Redacted]'
     remove (Boolean): Optional. Instead of censoring the value, remove both the key and the value. Default: false

___

### safe

• `Optional` **safe**: undefined \| false \| true

*Inherited from [PinoLoggerOptions](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md).[safe](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#safe)*

*Defined in node_modules/@types/pino/index.d.ts:187*

Avoid error causes by circular references in the object tree. Default: `true`.

___

### serializers

• `Optional` **serializers**: undefined \| { [key:string]: SerializerFn;  }

*Inherited from [PinoLoggerOptions](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md).[serializers](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#serializers)*

*Defined in node_modules/@types/pino/index.d.ts:197*

an object containing functions for custom serialization of objects.
These functions should return an JSONifiable object and they should never throw. When logging an object,
each top-level property matching the exact key of a serializer will be serialized using the defined serializer.

___

### timestamp

• `Optional` **timestamp**: TimeFn \| boolean

*Inherited from [PinoLoggerOptions](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md).[timestamp](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#timestamp)*

*Defined in node_modules/@types/pino/index.d.ts:204*

Enables or disables the inclusion of a timestamp in the log message. If a function is supplied, it must
synchronously return a JSON string representation of the time. If set to `false`, no timestamp will be included in the output.
See stdTimeFunctions for a set of available functions for passing in as a value for this option.
Caution: any sort of formatted time will significantly slow down Pino's performance.

___

### useLevelLabels

• `Optional` **useLevelLabels**: undefined \| false \| true

*Inherited from [PinoLoggerOptions](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md).[useLevelLabels](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#uselevellabels)*

*Defined in node_modules/@types/pino/index.d.ts:213*

Outputs the level as a string instead of integer. Default: `false`.

___

### useOnlyCustomLevels

• `Optional` **useOnlyCustomLevels**: undefined \| false \| true

*Inherited from [PinoLoggerOptions](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md).[useOnlyCustomLevels](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#useonlycustomlevels)*

*Defined in node_modules/@types/pino/index.d.ts:228*

Use this option to only use defined `customLevels` and omit Pino's levels.
Logger's default `level` must be changed to a value in `customLevels` in order to use `useOnlyCustomLevels`
Warning: this option may not be supported by downstream transports.

___

### usePinoStdSerializers

• `Optional` **usePinoStdSerializers**: undefined \| false \| true

*Defined in src/implementations/loggers/pino-logger/interfaces.ts:23*

Should the [standard Pino serializers](https://github.com/pinojs/pino/blob/master/docs/api.md#pino-stdserializers)
be passed to the [Pino serializers option](https://github.com/pinojs/pino/blob/master/docs/api.md#serializers-object)?

## Methods

### onTerminated

▸ `Optional`**onTerminated**(`eventName`: string, `err`: any): void

*Inherited from [PinoLoggerOptions](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md).[onTerminated](_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md#onterminated)*

*Defined in node_modules/@types/pino/index.d.ts:262*

This function will be invoked during process shutdown when `extreme` is set to `true`. If you do not specify
a function, Pino will invoke `process.exit(0)` when no error has occurred, and `process.exit(1)` otherwise.
If you do specify a function, it is up to you to terminate the process; you must perform only synchronous
operations at this point. See http://getpino.io/#/docs/extreme for more detail.

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | string |
`err` | any |

**Returns:** void
