**[@qest/logger-utils](../README.md)**

> [Globals](../README.md) / ["implementations/output-streams/bunyan-logger-sentry-stream/index"](../modules/_implementations_output_streams_bunyan_logger_sentry_stream_index_.md) / BunyanLoggerSentryStream

# Class: BunyanLoggerSentryStream

Will send logged information to Sentry based on the provided options ([SentryStreamOptions](../interfaces/_lib_output_streams_interfaces_.sentrystreamoptions.md)).
Also see [AbstractSentryStreamBase](_lib_output_streams_sentry_stream_base_index_.abstractsentrystreambase.md) for more information about what objects are sent to the Sentry.

You can use this stream with the [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).

## Hierarchy

* [AbstractSentryStreamBase](_lib_output_streams_sentry_stream_base_index_.abstractsentrystreambase.md)

  ↳ **BunyanLoggerSentryStream**

## Implements

* WriteStream
* WriteStream

## Index

### Constructors

* [constructor](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#constructor)

### Properties

* [bufferSize](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#buffersize)
* [bytesRead](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#bytesread)
* [bytesWritten](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#byteswritten)
* [columns](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#columns)
* [connecting](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#connecting)
* [destroyed](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#destroyed)
* [isTTY](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#istty)
* [localAddress](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#localaddress)
* [localPort](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#localport)
* [readable](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#readable)
* [readableHighWaterMark](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#readablehighwatermark)
* [readableLength](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#readablelength)
* [readableObjectMode](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#readableobjectmode)
* [remoteAddress](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#remoteaddress)
* [remoteFamily](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#remotefamily)
* [remotePort](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#remoteport)
* [rows](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#rows)
* [writable](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#writable)
* [writableFinished](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#writablefinished)
* [writableHighWaterMark](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#writablehighwatermark)
* [writableLength](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#writablelength)
* [writableObjectMode](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#writableobjectmode)

### Methods

* [[Symbol.asyncIterator]](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#[symbol.asynciterator])
* [\_destroy](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#_destroy)
* [\_final](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#_final)
* [\_read](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#_read)
* [\_write](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#_write)
* [\_writev](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#_writev)
* [addListener](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#addlistener)
* [address](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#address)
* [captureBreadcrumb](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#capturebreadcrumb)
* [clearLine](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#clearline)
* [clearScreenDown](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#clearscreendown)
* [connect](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#connect)
* [cork](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#cork)
* [cursorTo](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#cursorto)
* [destroy](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#destroy)
* [emit](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#emit)
* [end](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#end)
* [eventNames](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#eventnames)
* [getColorDepth](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#getcolordepth)
* [getMaxListeners](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#getmaxlisteners)
* [getWindowSize](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#getwindowsize)
* [hasColors](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#hascolors)
* [isPaused](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#ispaused)
* [listenerCount](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#listenercount)
* [listeners](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#listeners)
* [moveCursor](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#movecursor)
* [off](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#off)
* [on](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#on)
* [once](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#once)
* [pause](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#pause)
* [pipe](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#pipe)
* [prependListener](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#prependlistener)
* [prependOnceListener](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#prependoncelistener)
* [push](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#push)
* [rawListeners](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#rawlisteners)
* [read](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#read)
* [ref](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#ref)
* [removeAllListeners](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#removealllisteners)
* [removeListener](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#removelistener)
* [resume](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#resume)
* [setDefaultEncoding](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#setdefaultencoding)
* [setEncoding](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#setencoding)
* [setKeepAlive](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#setkeepalive)
* [setMaxListeners](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#setmaxlisteners)
* [setNoDelay](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#setnodelay)
* [setTimeout](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#settimeout)
* [uncork](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#uncork)
* [unpipe](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#unpipe)
* [unref](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#unref)
* [unshift](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#unshift)
* [wrap](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#wrap)
* [write](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#write)
* [isSentryStreamEnabled](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md#issentrystreamenabled)

## Constructors

### constructor

\+ **new BunyanLoggerSentryStream**(`args`: [SentryStreamOptions](../interfaces/_lib_output_streams_interfaces_.sentrystreamoptions.md)): [BunyanLoggerSentryStream](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md)

*Overrides [AbstractSentryStreamBase](_lib_output_streams_sentry_stream_base_index_.abstractsentrystreambase.md).[constructor](_lib_output_streams_sentry_stream_base_index_.abstractsentrystreambase.md#constructor)*

*Defined in src/implementations/output-streams/bunyan-logger-sentry-stream/index.ts:11*

#### Parameters:

Name | Type |
------ | ------ |
`args` | [SentryStreamOptions](../interfaces/_lib_output_streams_interfaces_.sentrystreamoptions.md) |

**Returns:** [BunyanLoggerSentryStream](_implementations_output_streams_bunyan_logger_sentry_stream_index_.bunyanloggersentrystream.md)

## Properties

### bufferSize

• `Readonly` **bufferSize**: number

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[bufferSize](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#buffersize)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:24*

___

### bytesRead

• `Readonly` **bytesRead**: number

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[bytesRead](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#bytesread)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:25*

___

### bytesWritten

• `Readonly` **bytesWritten**: number

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[bytesWritten](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#byteswritten)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:26*

___

### columns

•  **columns**: number

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[columns](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#columns)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:21*

___

### connecting

• `Readonly` **connecting**: boolean

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[connecting](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#connecting)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:27*

___

### destroyed

• `Readonly` **destroyed**: boolean

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[destroyed](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#destroyed)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:28*

___

### isTTY

•  **isTTY**: true

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[isTTY](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#istty)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:22*

___

### localAddress

• `Readonly` **localAddress**: string

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[localAddress](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#localaddress)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:29*

___

### localPort

• `Readonly` **localPort**: number

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[localPort](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#localport)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:30*

___

### readable

•  **readable**: boolean

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[readable](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#readable)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:19*

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: number

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[readableHighWaterMark](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#readablehighwatermark)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:31*

___

### readableLength

• `Readonly` **readableLength**: number

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[readableLength](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#readablelength)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:32*

___

### readableObjectMode

• `Readonly` **readableObjectMode**: boolean

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[readableObjectMode](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#readableobjectmode)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:33*

___

### remoteAddress

• `Readonly` **remoteAddress**: string

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[remoteAddress](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#remoteaddress)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:34*

___

### remoteFamily

• `Readonly` **remoteFamily**: string

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[remoteFamily](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#remotefamily)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:35*

___

### remotePort

• `Readonly` **remotePort**: number

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[remotePort](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#remoteport)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:36*

___

### rows

•  **rows**: number

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[rows](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#rows)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:23*

___

### writable

•  **writable**: boolean

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[writable](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#writable)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:20*

___

### writableFinished

• `Readonly` **writableFinished**: boolean

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[writableFinished](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#writablefinished)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:37*

___

### writableHighWaterMark

•  **writableHighWaterMark**: number

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[writableHighWaterMark](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#writablehighwatermark)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:17*

___

### writableLength

•  **writableLength**: number

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[writableLength](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#writablelength)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:18*

___

### writableObjectMode

• `Readonly` **writableObjectMode**: boolean

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[writableObjectMode](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#writableobjectmode)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:38*

## Methods

### [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): AsyncIterableIterator\<string \| Buffer>

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[[Symbol.asyncIterator]](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#[symbol.asynciterator])*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:99*

**Returns:** AsyncIterableIterator\<string \| Buffer>

___

### \_destroy

▸ **_destroy**(`err`: [Error](../interfaces/_implementations_object_formats_interfaces_.errorobject.md#error), `callback`: Function): void

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[_destroy](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#_destroy)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:49*

#### Parameters:

Name | Type |
------ | ------ |
`err` | [Error](../interfaces/_implementations_object_formats_interfaces_.errorobject.md#error) |
`callback` | Function |

**Returns:** void

___

### \_final

▸ **_final**(`callback`: Function): void

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[_final](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#_final)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:52*

#### Parameters:

Name | Type |
------ | ------ |
`callback` | Function |

**Returns:** void

___

### \_read

▸ **_read**(`size`: number): void

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[_read](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#_read)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:168*

#### Parameters:

Name | Type |
------ | ------ |
`size` | number |

**Returns:** void

___

### \_write

▸ **_write**(`chunk`: any, `encoding`: string, `callback`: Function): void

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[_write](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#_write)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:46*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`encoding` | string |
`callback` | Function |

**Returns:** void

___

### \_writev

▸ **_writev**(`chunks`: { chunk: any ; encoding: string  }[], `callback`: (error?: [Error](../interfaces/_implementations_object_formats_interfaces_.errorobject.md#error) \| null) => void): void

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[_writev](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#_writev)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:172*

#### Parameters:

Name | Type |
------ | ------ |
`chunks` | { chunk: any ; encoding: string  }[] |
`callback` | (error?: [Error](../interfaces/_implementations_object_formats_interfaces_.errorobject.md#error) \| null) => void |

**Returns:** void

___

### addListener

▸ **addListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[addListener](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#addlistener)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:102*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### address

▸ **address**(): AddressInfo \| string

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[address](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#address)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:179*

**Returns:** AddressInfo \| string

___

### captureBreadcrumb

▸ **captureBreadcrumb**(`object`: [CustomSentryBreadcrumb](../interfaces/_lib_output_streams_sentry_stream_base_interfaces_.customsentrybreadcrumb.md)): void

*Inherited from [AbstractSentryStreamBase](_lib_output_streams_sentry_stream_base_index_.abstractsentrystreambase.md).[captureBreadcrumb](_lib_output_streams_sentry_stream_base_index_.abstractsentrystreambase.md#capturebreadcrumb)*

*Defined in src/lib/output-streams/sentry-stream-base/index.ts:58*

#### Parameters:

Name | Type |
------ | ------ |
`object` | [CustomSentryBreadcrumb](../interfaces/_lib_output_streams_sentry_stream_base_interfaces_.customsentrybreadcrumb.md) |

**Returns:** void

___

### clearLine

▸ **clearLine**(`dir`: -1 \| 0 \| 1, `callback?`: undefined \| () => void): boolean

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[clearLine](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#clearline)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:183*

#### Parameters:

Name | Type |
------ | ------ |
`dir` | -1 \| 0 \| 1 |
`callback?` | undefined \| () => void |

**Returns:** boolean

___

### clearScreenDown

▸ **clearScreenDown**(`callback?`: undefined \| () => void): boolean

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[clearScreenDown](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#clearscreendown)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:187*

#### Parameters:

Name | Type |
------ | ------ |
`callback?` | undefined \| () => void |

**Returns:** boolean

___

### connect

▸ **connect**(`options`: TcpSocketConnectOpts \| IpcSocketConnectOpts, `connectionListener?`: undefined \| () => void): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[connect](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#connect)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:191*

#### Parameters:

Name | Type |
------ | ------ |
`options` | TcpSocketConnectOpts \| IpcSocketConnectOpts |
`connectionListener?` | undefined \| () => void |

**Returns:** this

▸ **connect**(`port`: number, `host`: string, `connectionListener?`: undefined \| () => void): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[connect](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#connect)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:195*

#### Parameters:

Name | Type |
------ | ------ |
`port` | number |
`host` | string |
`connectionListener?` | undefined \| () => void |

**Returns:** this

▸ **connect**(`port`: number, `connectionListener?`: undefined \| () => void): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[connect](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#connect)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:196*

#### Parameters:

Name | Type |
------ | ------ |
`port` | number |
`connectionListener?` | undefined \| () => void |

**Returns:** this

▸ **connect**(`path`: string, `connectionListener?`: undefined \| () => void): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[connect](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#connect)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:197*

#### Parameters:

Name | Type |
------ | ------ |
`path` | string |
`connectionListener?` | undefined \| () => void |

**Returns:** this

___

### cork

▸ **cork**(): void

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[cork](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#cork)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:58*

**Returns:** void

___

### cursorTo

▸ **cursorTo**(`x`: number, `y?`: undefined \| number, `callback?`: undefined \| () => void): boolean

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[cursorTo](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#cursorto)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:206*

#### Parameters:

Name | Type |
------ | ------ |
`x` | number |
`y?` | undefined \| number |
`callback?` | undefined \| () => void |

**Returns:** boolean

▸ **cursorTo**(`x`: number, `callback`: () => void): boolean

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[cursorTo](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#cursorto)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:207*

#### Parameters:

Name | Type |
------ | ------ |
`x` | number |
`callback` | () => void |

**Returns:** boolean

___

### destroy

▸ **destroy**(`error?`: [Error](../interfaces/_implementations_object_formats_interfaces_.errorobject.md#error)): void

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[destroy](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#destroy)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:64*

#### Parameters:

Name | Type |
------ | ------ |
`error?` | [Error](../interfaces/_implementations_object_formats_interfaces_.errorobject.md#error) |

**Returns:** void

___

### emit

▸ **emit**(`event`: string \| symbol, ...`args`: any[]): boolean

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[emit](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#emit)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:138*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`...args` | any[] |

**Returns:** boolean

___

### end

▸ **end**(`cb?`: Function): void

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[end](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#end)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:160*

#### Parameters:

Name | Type |
------ | ------ |
`cb?` | Function |

**Returns:** void

▸ **end**(`buffer`: Buffer, `cb?`: Function): void

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[end](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#end)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:161*

#### Parameters:

Name | Type |
------ | ------ |
`buffer` | Buffer |
`cb?` | Function |

**Returns:** void

▸ **end**(`str`: string, `cb?`: Function): void

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[end](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#end)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:162*

#### Parameters:

Name | Type |
------ | ------ |
`str` | string |
`cb?` | Function |

**Returns:** void

▸ **end**(`str`: string, `encoding?`: undefined \| string, `cb?`: Function): void

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[end](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#end)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:163*

#### Parameters:

Name | Type |
------ | ------ |
`str` | string |
`encoding?` | undefined \| string |
`cb?` | Function |

**Returns:** void

___

### eventNames

▸ **eventNames**(): (string \| symbol)[]

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[eventNames](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#eventnames)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:156*

**Returns:** (string \| symbol)[]

___

### getColorDepth

▸ **getColorDepth**(`env?`: undefined \| {}): number

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[getColorDepth](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#getcolordepth)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:216*

#### Parameters:

Name | Type |
------ | ------ |
`env?` | undefined \| {} |

**Returns:** number

___

### getMaxListeners

▸ **getMaxListeners**(): number

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[getMaxListeners](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#getmaxlisteners)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:129*

**Returns:** number

___

### getWindowSize

▸ **getWindowSize**(): [number, number]

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[getWindowSize](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#getwindowsize)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:220*

**Returns:** [number, number]

___

### hasColors

▸ **hasColors**(`depth?`: undefined \| number): boolean

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[hasColors](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#hascolors)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:224*

#### Parameters:

Name | Type |
------ | ------ |
`depth?` | undefined \| number |

**Returns:** boolean

▸ **hasColors**(`env?`: undefined \| {}): boolean

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[hasColors](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#hascolors)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:225*

#### Parameters:

Name | Type |
------ | ------ |
`env?` | undefined \| {} |

**Returns:** boolean

▸ **hasColors**(`depth`: number, `env?`: undefined \| {}): boolean

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[hasColors](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#hascolors)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:226*

#### Parameters:

Name | Type |
------ | ------ |
`depth` | number |
`env?` | undefined \| {} |

**Returns:** boolean

___

### isPaused

▸ **isPaused**(): boolean

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[isPaused](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#ispaused)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:79*

**Returns:** boolean

___

### listenerCount

▸ **listenerCount**(`type`: string \| symbol): number

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[listenerCount](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#listenercount)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:141*

#### Parameters:

Name | Type |
------ | ------ |
`type` | string \| symbol |

**Returns:** number

___

### listeners

▸ **listeners**(`event`: string \| symbol): Function[]

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[listeners](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#listeners)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:132*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

### moveCursor

▸ **moveCursor**(`dx`: number, `dy`: number, `callback?`: undefined \| () => void): boolean

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[moveCursor](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#movecursor)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:231*

#### Parameters:

Name | Type |
------ | ------ |
`dx` | number |
`dy` | number |
`callback?` | undefined \| () => void |

**Returns:** boolean

___

### off

▸ **off**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[off](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#off)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:120*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### on

▸ **on**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[on](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#on)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:108*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### once

▸ **once**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[once](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#once)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:111*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### pause

▸ **pause**(): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[pause](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#pause)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:73*

**Returns:** this

___

### pipe

▸ **pipe**\<T>(`destination`: T, `options?`: undefined \| { end?: undefined \| false \| true  }): T

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[pipe](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#pipe)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:82*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | WritableStream |

#### Parameters:

Name | Type |
------ | ------ |
`destination` | T |
`options?` | undefined \| { end?: undefined \| false \| true  } |

**Returns:** T

___

### prependListener

▸ **prependListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[prependListener](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#prependlistener)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:144*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### prependOnceListener

▸ **prependOnceListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[prependOnceListener](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#prependoncelistener)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:150*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### push

▸ **push**(`chunk`: any, `encoding?`: undefined \| string): boolean

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[push](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#push)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:235*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined \| string |

**Returns:** boolean

___

### rawListeners

▸ **rawListeners**(`event`: string \| symbol): Function[]

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[rawListeners](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#rawlisteners)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:135*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

### read

▸ **read**(`size?`: undefined \| number): string \| Buffer

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[read](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#read)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:67*

#### Parameters:

Name | Type |
------ | ------ |
`size?` | undefined \| number |

**Returns:** string \| Buffer

___

### ref

▸ **ref**(): void

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[ref](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#ref)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:239*

**Returns:** void

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: string \| symbol): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[removeAllListeners](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#removealllisteners)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:123*

#### Parameters:

Name | Type |
------ | ------ |
`event?` | string \| symbol |

**Returns:** this

___

### removeListener

▸ **removeListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[removeListener](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#removelistener)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:114*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### resume

▸ **resume**(): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[resume](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#resume)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:76*

**Returns:** this

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`: string): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[setDefaultEncoding](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#setdefaultencoding)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:55*

#### Parameters:

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** this

___

### setEncoding

▸ **setEncoding**(`encoding`: string): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[setEncoding](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#setencoding)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:70*

#### Parameters:

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** this

___

### setKeepAlive

▸ **setKeepAlive**(`enable?`: undefined \| false \| true, `initialDelay?`: undefined \| number): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[setKeepAlive](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#setkeepalive)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:243*

#### Parameters:

Name | Type |
------ | ------ |
`enable?` | undefined \| false \| true |
`initialDelay?` | undefined \| number |

**Returns:** this

___

### setMaxListeners

▸ **setMaxListeners**(`n`: number): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[setMaxListeners](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#setmaxlisteners)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:126*

#### Parameters:

Name | Type |
------ | ------ |
`n` | number |

**Returns:** this

___

### setNoDelay

▸ **setNoDelay**(`noDelay?`: undefined \| false \| true): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[setNoDelay](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#setnodelay)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:247*

#### Parameters:

Name | Type |
------ | ------ |
`noDelay?` | undefined \| false \| true |

**Returns:** this

___

### setTimeout

▸ **setTimeout**(`timeout`: number, `callback?`: undefined \| () => void): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[setTimeout](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#settimeout)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:251*

#### Parameters:

Name | Type |
------ | ------ |
`timeout` | number |
`callback?` | undefined \| () => void |

**Returns:** this

___

### uncork

▸ **uncork**(): void

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[uncork](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#uncork)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:61*

**Returns:** void

___

### unpipe

▸ **unpipe**(`destination?`: NodeJS.WritableStream): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[unpipe](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#unpipe)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:88*

#### Parameters:

Name | Type |
------ | ------ |
`destination?` | NodeJS.WritableStream |

**Returns:** this

___

### unref

▸ **unref**(): void

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[unref](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#unref)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:255*

**Returns:** void

___

### unshift

▸ **unshift**(`chunk`: string): void

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[unshift](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#unshift)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:91*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | string |

**Returns:** void

▸ **unshift**(`chunk`: Buffer): void

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[unshift](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#unshift)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:92*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | Buffer |

**Returns:** void

___

### wrap

▸ **wrap**(`oldStream`: ReadableStream): this

*Inherited from [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[wrap](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#wrap)*

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:96*

#### Parameters:

Name | Type |
------ | ------ |
`oldStream` | ReadableStream |

**Returns:** this

___

### write

▸ **write**(`recordString`: string \| Buffer): boolean

*Inherited from [AbstractSentryStreamBase](_lib_output_streams_sentry_stream_base_index_.abstractsentrystreambase.md).[write](_lib_output_streams_sentry_stream_base_index_.abstractsentrystreambase.md#write)*

*Overrides [SimpleWriteStreamBase](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md).[write](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#write)*

*Defined in src/lib/output-streams/sentry-stream-base/index.ts:36*

#### Parameters:

Name | Type |
------ | ------ |
`recordString` | string \| Buffer |

**Returns:** boolean

___

### isSentryStreamEnabled

▸ `Static`**isSentryStreamEnabled**(`dsn`: string): boolean

*Inherited from [AbstractSentryStreamBase](_lib_output_streams_sentry_stream_base_index_.abstractsentrystreambase.md).[isSentryStreamEnabled](_lib_output_streams_sentry_stream_base_index_.abstractsentrystreambase.md#issentrystreamenabled)*

*Defined in src/lib/output-streams/sentry-stream-base/index.ts:20*

#### Parameters:

Name | Type |
------ | ------ |
`dsn` | string |

**Returns:** boolean