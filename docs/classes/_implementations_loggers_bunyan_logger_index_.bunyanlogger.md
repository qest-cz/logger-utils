**[@qest/logger-utils](../README.md)**

> [Globals](../README.md) / ["implementations/loggers/bunyan-logger/index"](../modules/_implementations_loggers_bunyan_logger_index_.md) / BunyanLogger

# Class: BunyanLogger

## Hierarchy

* Logger

  ↳ **BunyanLogger**

## Implements

* [Logger](../interfaces/_lib_loggers_interfaces_.logger.md)

## Index

### Classes

* [RingBuffer](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md)
* [RotatingFileStream](_implementations_loggers_bunyan_logger_index_.bunyanlogger.rotatingfilestream.md)

### Interfaces

* [LoggerOptions](../interfaces/_implementations_loggers_bunyan_logger_index_.bunyanlogger.loggeroptions.md)
* [RingBufferOptions](../interfaces/_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbufferoptions.md)
* [RotatingFileStreamOptions](../interfaces/_implementations_loggers_bunyan_logger_index_.bunyanlogger.rotatingfilestreamoptions.md)
* [Serializers](../interfaces/_implementations_loggers_bunyan_logger_index_.bunyanlogger.serializers.md)
* [StdSerializers](../interfaces/_implementations_loggers_bunyan_logger_index_.bunyanlogger.stdserializers.md)
* [Stream](../interfaces/_implementations_loggers_bunyan_logger_index_.bunyanlogger.stream.md)

### Type aliases

* [LogLevel](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#loglevel)
* [LogLevelString](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#loglevelstring)
* [Serializer](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#serializer)

### Constructors

* [constructor](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#constructor)

### Properties

* [fields](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#fields)
* [src](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#src)
* [DEBUG](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#debug)
* [ERROR](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#error)
* [FATAL](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#fatal)
* [INFO](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#info)
* [TRACE](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#trace)
* [WARN](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#warn)
* [defaultMaxListeners](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#defaultmaxlisteners)
* [levelFromName](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#levelfromname)
* [nameFromLevel](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#namefromlevel)
* [stdSerializers](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#stdserializers)

### Methods

* [addListener](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#addlistener)
* [addSerializers](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#addserializers)
* [addStream](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#addstream)
* [child](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#child)
* [debug](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#debug)
* [emit](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#emit)
* [error](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#error)
* [eventNames](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#eventnames)
* [fatal](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#fatal)
* [getMaxListeners](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#getmaxlisteners)
* [info](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#info)
* [level](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#level)
* [levels](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#levels)
* [listenerCount](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#listenercount)
* [listeners](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#listeners)
* [off](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#off)
* [on](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#on)
* [once](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#once)
* [prependListener](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#prependlistener)
* [prependOnceListener](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#prependoncelistener)
* [rawListeners](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#rawlisteners)
* [removeAllListeners](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#removealllisteners)
* [removeListener](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#removelistener)
* [reopenFileStreams](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#reopenfilestreams)
* [setMaxListeners](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#setmaxlisteners)
* [trace](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#trace)
* [warn](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#warn)
* [createLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#createlogger)
* [listenerCount](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#listenercount)
* [resolveLevel](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#resolvelevel)
* [safeCycles](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#safecycles)

## Type aliases

### LogLevel

Ƭ `Static` **LogLevel**: [LogLevelString](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#loglevelstring) \| number

*Defined in node_modules/@types/bunyan/index.d.ts:211*

___

### LogLevelString

Ƭ `Static` **LogLevelString**: \"trace\" \| \"debug\" \| \"info\" \| \"warn\" \| \"error\" \| \"fatal\"

*Defined in node_modules/@types/bunyan/index.d.ts:210*

___

### Serializer

Ƭ `Static` **Serializer**: (input: any) => any

*Defined in node_modules/@types/bunyan/index.d.ts:246*

## Constructors

### constructor

\+ **new BunyanLogger**(`options`: [BunyanLoggerOption](../interfaces/_implementations_loggers_bunyan_logger_interfaces_.bunyanloggeroption.md)): [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md)

*Overrides void*

*Defined in src/implementations/loggers/bunyan-logger/index.ts:7*

#### Parameters:

Name | Type |
------ | ------ |
`options` | [BunyanLoggerOption](../interfaces/_implementations_loggers_bunyan_logger_interfaces_.bunyanloggeroption.md) |

**Returns:** [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md)

## Properties

### fields

•  **fields**: any

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[fields](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#fields)*

*Defined in node_modules/@types/bunyan/index.d.ts:24*

___

### src

•  **src**: boolean

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[src](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#src)*

*Defined in node_modules/@types/bunyan/index.d.ts:25*

___

### DEBUG

▪ `Static` **DEBUG**: number

*Defined in node_modules/@types/bunyan/index.d.ts:204*

___

### ERROR

▪ `Static` **ERROR**: number

*Defined in node_modules/@types/bunyan/index.d.ts:207*

___

### FATAL

▪ `Static` **FATAL**: number

*Defined in node_modules/@types/bunyan/index.d.ts:208*

___

### INFO

▪ `Static` **INFO**: number

*Defined in node_modules/@types/bunyan/index.d.ts:205*

___

### TRACE

▪ `Static` **TRACE**: number

*Defined in node_modules/@types/bunyan/index.d.ts:203*

___

### WARN

▪ `Static` **WARN**: number

*Defined in node_modules/@types/bunyan/index.d.ts:206*

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: number

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[defaultMaxListeners](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#defaultmaxlisteners)*

*Defined in node_modules/@types/node/events.d.ts:18*

___

### levelFromName

▪ `Static` **levelFromName**: {}

*Defined in node_modules/@types/bunyan/index.d.ts:213*

___

### nameFromLevel

▪ `Static` **nameFromLevel**: { [level:number]: string;  }

*Defined in node_modules/@types/bunyan/index.d.ts:214*

___

### stdSerializers

▪ `Static` **stdSerializers**: [StdSerializers](../interfaces/_implementations_loggers_bunyan_logger_index_.bunyanlogger.stdserializers.md)

*Defined in node_modules/@types/bunyan/index.d.ts:216*

## Methods

### addListener

▸ **addListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[addListener](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/events.d.ts:20*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### addSerializers

▸ **addSerializers**(`serializers`: [Serializers](../interfaces/_implementations_loggers_bunyan_logger_index_.bunyanlogger.serializers.md)): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[addSerializers](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#addserializers)*

*Defined in node_modules/@types/bunyan/index.d.ts:14*

#### Parameters:

Name | Type |
------ | ------ |
`serializers` | [Serializers](../interfaces/_implementations_loggers_bunyan_logger_index_.bunyanlogger.serializers.md) |

**Returns:** void

___

### addStream

▸ **addStream**(`stream`: [Stream](../interfaces/_implementations_loggers_bunyan_logger_index_.bunyanlogger.stream.md)): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[addStream](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#addstream)*

*Defined in node_modules/@types/bunyan/index.d.ts:13*

#### Parameters:

Name | Type |
------ | ------ |
`stream` | [Stream](../interfaces/_implementations_loggers_bunyan_logger_index_.bunyanlogger.stream.md) |

**Returns:** void

___

### child

▸ **child**(`options`: Object, `simple?`: undefined \| false \| true): Logger

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[child](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#child)*

*Defined in node_modules/@types/bunyan/index.d.ts:15*

#### Parameters:

Name | Type |
------ | ------ |
`options` | Object |
`simple?` | undefined \| false \| true |

**Returns:** Logger

___

### debug

▸ **debug**(): boolean

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[debug](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#debug)*

*Defined in node_modules/@types/bunyan/index.d.ts:61*

Returns a boolean: is the `debug` level enabled?

This is equivalent to `log.isDebugEnabled()` or `log.isEnabledFor(DEBUG)` in log4j.

**Returns:** boolean

▸ **debug**(`error`: [Error](../interfaces/_implementations_object_formats_interfaces_.errorobject.md#error), ...`params`: any[]): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[debug](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#debug)*

*Defined in node_modules/@types/bunyan/index.d.ts:69*

Special case to log an `Error` instance to the record.
This adds an `err` field with exception details
(including the stack) and sets `msg` to the exception
message or you can specify the `msg`.

#### Parameters:

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/_implementations_object_formats_interfaces_.errorobject.md#error) |
`...params` | any[] |

**Returns:** void

▸ **debug**(`obj`: Object, ...`params`: any[]): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[debug](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#debug)*

*Defined in node_modules/@types/bunyan/index.d.ts:78*

The first field can optionally be a "fields" object, which
is merged into the log record.

To pass in an Error *and* other fields, use the `err`
field name for the Error instance.

#### Parameters:

Name | Type |
------ | ------ |
`obj` | Object |
`...params` | any[] |

**Returns:** void

▸ **debug**(`format`: any, ...`params`: any[]): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[debug](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#debug)*

*Defined in node_modules/@types/bunyan/index.d.ts:83*

Uses `util.format` for msg formatting.

#### Parameters:

Name | Type |
------ | ------ |
`format` | any |
`...params` | any[] |

**Returns:** void

___

### emit

▸ **emit**(`event`: string \| symbol, ...`args`: any[]): boolean

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[emit](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/events.d.ts:32*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`...args` | any[] |

**Returns:** boolean

___

### error

▸ **error**(): boolean

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[error](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#error)*

*Defined in node_modules/@types/bunyan/index.d.ts:148*

Returns a boolean: is the `error` level enabled?

This is equivalent to `log.isErrorEnabled()` or `log.isEnabledFor(ERROR)` in log4j.

**Returns:** boolean

▸ **error**(`error`: [Error](../interfaces/_implementations_object_formats_interfaces_.errorobject.md#error), ...`params`: any[]): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[error](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#error)*

*Defined in node_modules/@types/bunyan/index.d.ts:156*

Special case to log an `Error` instance to the record.
This adds an `err` field with exception details
(including the stack) and sets `msg` to the exception
message or you can specify the `msg`.

#### Parameters:

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/_implementations_object_formats_interfaces_.errorobject.md#error) |
`...params` | any[] |

**Returns:** void

▸ **error**(`obj`: Object, ...`params`: any[]): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[error](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#error)*

*Defined in node_modules/@types/bunyan/index.d.ts:165*

The first field can optionally be a "fields" object, which
is merged into the log record.

To pass in an Error *and* other fields, use the `err`
field name for the Error instance.

#### Parameters:

Name | Type |
------ | ------ |
`obj` | Object |
`...params` | any[] |

**Returns:** void

▸ **error**(`format`: any, ...`params`: any[]): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[error](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#error)*

*Defined in node_modules/@types/bunyan/index.d.ts:170*

Uses `util.format` for msg formatting.

#### Parameters:

Name | Type |
------ | ------ |
`format` | any |
`...params` | any[] |

**Returns:** void

___

### eventNames

▸ **eventNames**(): Array\<string \| symbol>

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[eventNames](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#eventnames)*

*Overrides void*

*Defined in node_modules/@types/node/events.d.ts:33*

**Returns:** Array\<string \| symbol>

___

### fatal

▸ **fatal**(): boolean

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[fatal](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#fatal)*

*Defined in node_modules/@types/bunyan/index.d.ts:177*

Returns a boolean: is the `fatal` level enabled?

This is equivalent to `log.isFatalEnabled()` or `log.isEnabledFor(FATAL)` in log4j.

**Returns:** boolean

▸ **fatal**(`error`: [Error](../interfaces/_implementations_object_formats_interfaces_.errorobject.md#error), ...`params`: any[]): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[fatal](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#fatal)*

*Defined in node_modules/@types/bunyan/index.d.ts:185*

Special case to log an `Error` instance to the record.
This adds an `err` field with exception details
(including the stack) and sets `msg` to the exception
message or you can specify the `msg`.

#### Parameters:

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/_implementations_object_formats_interfaces_.errorobject.md#error) |
`...params` | any[] |

**Returns:** void

▸ **fatal**(`obj`: Object, ...`params`: any[]): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[fatal](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#fatal)*

*Defined in node_modules/@types/bunyan/index.d.ts:194*

The first field can optionally be a "fields" object, which
is merged into the log record.

To pass in an Error *and* other fields, use the `err`
field name for the Error instance.

#### Parameters:

Name | Type |
------ | ------ |
`obj` | Object |
`...params` | any[] |

**Returns:** void

▸ **fatal**(`format`: any, ...`params`: any[]): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[fatal](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#fatal)*

*Defined in node_modules/@types/bunyan/index.d.ts:199*

Uses `util.format` for msg formatting.

#### Parameters:

Name | Type |
------ | ------ |
`format` | any |
`...params` | any[] |

**Returns:** void

___

### getMaxListeners

▸ **getMaxListeners**(): number

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[getMaxListeners](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#getmaxlisteners)*

*Overrides void*

*Defined in node_modules/@types/node/events.d.ts:29*

**Returns:** number

___

### info

▸ **info**(): boolean

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[info](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#info)*

*Defined in node_modules/@types/bunyan/index.d.ts:90*

Returns a boolean: is the `info` level enabled?

This is equivalent to `log.isInfoEnabled()` or `log.isEnabledFor(INFO)` in log4j.

**Returns:** boolean

▸ **info**(`error`: [Error](../interfaces/_implementations_object_formats_interfaces_.errorobject.md#error), ...`params`: any[]): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[info](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#info)*

*Defined in node_modules/@types/bunyan/index.d.ts:98*

Special case to log an `Error` instance to the record.
This adds an `err` field with exception details
(including the stack) and sets `msg` to the exception
message or you can specify the `msg`.

#### Parameters:

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/_implementations_object_formats_interfaces_.errorobject.md#error) |
`...params` | any[] |

**Returns:** void

▸ **info**(`obj`: Object, ...`params`: any[]): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[info](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#info)*

*Defined in node_modules/@types/bunyan/index.d.ts:107*

The first field can optionally be a "fields" object, which
is merged into the log record.

To pass in an Error *and* other fields, use the `err`
field name for the Error instance.

#### Parameters:

Name | Type |
------ | ------ |
`obj` | Object |
`...params` | any[] |

**Returns:** void

▸ **info**(`format`: any, ...`params`: any[]): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[info](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#info)*

*Defined in node_modules/@types/bunyan/index.d.ts:112*

Uses `util.format` for msg formatting.

#### Parameters:

Name | Type |
------ | ------ |
`format` | any |
`...params` | any[] |

**Returns:** void

___

### level

▸ **level**(): number

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[level](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#level)*

*Defined in node_modules/@types/bunyan/index.d.ts:18*

**Returns:** number

▸ **level**(`value`: Logger.LogLevel): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[level](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#level)*

*Defined in node_modules/@types/bunyan/index.d.ts:19*

#### Parameters:

Name | Type |
------ | ------ |
`value` | Logger.LogLevel |

**Returns:** void

___

### levels

▸ **levels**(): number[]

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[levels](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#levels)*

*Defined in node_modules/@types/bunyan/index.d.ts:20*

**Returns:** number[]

▸ **levels**(`name`: number \| string): number

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[levels](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#levels)*

*Defined in node_modules/@types/bunyan/index.d.ts:21*

#### Parameters:

Name | Type |
------ | ------ |
`name` | number \| string |

**Returns:** number

▸ **levels**(`name`: number \| string, `value`: Logger.LogLevel): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[levels](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#levels)*

*Defined in node_modules/@types/bunyan/index.d.ts:22*

#### Parameters:

Name | Type |
------ | ------ |
`name` | number \| string |
`value` | Logger.LogLevel |

**Returns:** void

___

### listenerCount

▸ **listenerCount**(`type`: string \| symbol): number

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[listenerCount](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#listenercount)*

*Overrides void*

*Defined in node_modules/@types/node/events.d.ts:34*

#### Parameters:

Name | Type |
------ | ------ |
`type` | string \| symbol |

**Returns:** number

___

### listeners

▸ **listeners**(`event`: string \| symbol): Function[]

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[listeners](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#listeners)*

*Overrides void*

*Defined in node_modules/@types/node/events.d.ts:30*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

### off

▸ **off**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[off](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#off)*

*Overrides void*

*Defined in node_modules/@types/node/events.d.ts:26*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### on

▸ **on**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[on](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/events.d.ts:21*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### once

▸ **once**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[once](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/events.d.ts:22*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### prependListener

▸ **prependListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[prependListener](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/events.d.ts:23*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### prependOnceListener

▸ **prependOnceListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[prependOnceListener](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/events.d.ts:24*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### rawListeners

▸ **rawListeners**(`event`: string \| symbol): Function[]

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[rawListeners](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#rawlisteners)*

*Overrides void*

*Defined in node_modules/@types/node/events.d.ts:31*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: string \| symbol): this

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[removeAllListeners](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#removealllisteners)*

*Overrides void*

*Defined in node_modules/@types/node/events.d.ts:27*

#### Parameters:

Name | Type |
------ | ------ |
`event?` | string \| symbol |

**Returns:** this

___

### removeListener

▸ **removeListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[removeListener](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/events.d.ts:25*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### reopenFileStreams

▸ **reopenFileStreams**(): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[reopenFileStreams](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#reopenfilestreams)*

*Defined in node_modules/@types/bunyan/index.d.ts:16*

**Returns:** void

___

### setMaxListeners

▸ **setMaxListeners**(`n`: number): this

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[setMaxListeners](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#setmaxlisteners)*

*Overrides void*

*Defined in node_modules/@types/node/events.d.ts:28*

#### Parameters:

Name | Type |
------ | ------ |
`n` | number |

**Returns:** this

___

### trace

▸ **trace**(): boolean

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[trace](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#trace)*

*Defined in node_modules/@types/bunyan/index.d.ts:32*

Returns a boolean: is the `trace` level enabled?

This is equivalent to `log.isTraceEnabled()` or `log.isEnabledFor(TRACE)` in log4j.

**Returns:** boolean

▸ **trace**(`error`: [Error](../interfaces/_implementations_object_formats_interfaces_.errorobject.md#error), ...`params`: any[]): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[trace](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#trace)*

*Defined in node_modules/@types/bunyan/index.d.ts:40*

Special case to log an `Error` instance to the record.
This adds an `err` field with exception details
(including the stack) and sets `msg` to the exception
message or you can specify the `msg`.

#### Parameters:

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/_implementations_object_formats_interfaces_.errorobject.md#error) |
`...params` | any[] |

**Returns:** void

▸ **trace**(`obj`: Object, ...`params`: any[]): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[trace](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#trace)*

*Defined in node_modules/@types/bunyan/index.d.ts:49*

The first field can optionally be a "fields" object, which
is merged into the log record.

To pass in an Error *and* other fields, use the `err`
field name for the Error instance.

#### Parameters:

Name | Type |
------ | ------ |
`obj` | Object |
`...params` | any[] |

**Returns:** void

▸ **trace**(`format`: any, ...`params`: any[]): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[trace](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#trace)*

*Defined in node_modules/@types/bunyan/index.d.ts:54*

Uses `util.format` for msg formatting.

#### Parameters:

Name | Type |
------ | ------ |
`format` | any |
`...params` | any[] |

**Returns:** void

___

### warn

▸ **warn**(): boolean

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[warn](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#warn)*

*Defined in node_modules/@types/bunyan/index.d.ts:119*

Returns a boolean: is the `warn` level enabled?

This is equivalent to `log.isWarnEnabled()` or `log.isEnabledFor(WARN)` in log4j.

**Returns:** boolean

▸ **warn**(`error`: [Error](../interfaces/_implementations_object_formats_interfaces_.errorobject.md#error), ...`params`: any[]): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[warn](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#warn)*

*Defined in node_modules/@types/bunyan/index.d.ts:127*

Special case to log an `Error` instance to the record.
This adds an `err` field with exception details
(including the stack) and sets `msg` to the exception
message or you can specify the `msg`.

#### Parameters:

Name | Type |
------ | ------ |
`error` | [Error](../interfaces/_implementations_object_formats_interfaces_.errorobject.md#error) |
`...params` | any[] |

**Returns:** void

▸ **warn**(`obj`: Object, ...`params`: any[]): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[warn](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#warn)*

*Defined in node_modules/@types/bunyan/index.d.ts:136*

The first field can optionally be a "fields" object, which
is merged into the log record.

To pass in an Error *and* other fields, use the `err`
field name for the Error instance.

#### Parameters:

Name | Type |
------ | ------ |
`obj` | Object |
`...params` | any[] |

**Returns:** void

▸ **warn**(`format`: any, ...`params`: any[]): void

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[warn](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#warn)*

*Defined in node_modules/@types/bunyan/index.d.ts:141*

Uses `util.format` for msg formatting.

#### Parameters:

Name | Type |
------ | ------ |
`format` | any |
`...params` | any[] |

**Returns:** void

___

### createLogger

▸ `Static`**createLogger**(`options`: [LoggerOptions](../interfaces/_implementations_loggers_bunyan_logger_index_.bunyanlogger.loggeroptions.md)): Logger

*Defined in node_modules/@types/bunyan/index.d.ts:218*

#### Parameters:

Name | Type |
------ | ------ |
`options` | [LoggerOptions](../interfaces/_implementations_loggers_bunyan_logger_index_.bunyanlogger.loggeroptions.md) |

**Returns:** Logger

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: EventEmitter, `event`: string \| symbol): number

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[listenerCount](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#listenercount)*

*Defined in node_modules/@types/node/events.d.ts:17*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string \| symbol |

**Returns:** number

___

### resolveLevel

▸ `Static`**resolveLevel**(`value`: [LogLevel](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#loglevel)): number

*Defined in node_modules/@types/bunyan/index.d.ts:222*

#### Parameters:

Name | Type |
------ | ------ |
`value` | [LogLevel](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#loglevel) |

**Returns:** number

___

### safeCycles

▸ `Static`**safeCycles**(): function

*Defined in node_modules/@types/bunyan/index.d.ts:220*

**Returns:** function
