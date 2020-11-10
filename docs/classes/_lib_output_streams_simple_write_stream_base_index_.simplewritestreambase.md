**[@qest/logger-utils](../README.md)**

> [Globals](../README.md) / ["lib/output-streams/simple-write-stream-base/index"](../modules/_lib_output_streams_simple_write_stream_base_index_.md) / SimpleWriteStreamBase

# Class: SimpleWriteStreamBase

As I understand it, this is just a helper class, that sets some useful defaults for further stream implementations.

TODO: Add some examples how to implement this properly...
TODO: Original author should document this, why are some methods empty and etc...

## Hierarchy

* **SimpleWriteStreamBase**

  ↳ [AbstractSentryStreamBase](_lib_output_streams_sentry_stream_base_index_.abstractsentrystreambase.md)

## Implements

* WriteStream

## Index

### Properties

* [bufferSize](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#buffersize)
* [bytesRead](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#bytesread)
* [bytesWritten](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#byteswritten)
* [columns](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#columns)
* [connecting](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#connecting)
* [destroyed](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#destroyed)
* [isTTY](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#istty)
* [localAddress](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#localaddress)
* [localPort](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#localport)
* [readable](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#readable)
* [readableHighWaterMark](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#readablehighwatermark)
* [readableLength](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#readablelength)
* [readableObjectMode](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#readableobjectmode)
* [remoteAddress](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#remoteaddress)
* [remoteFamily](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#remotefamily)
* [remotePort](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#remoteport)
* [rows](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#rows)
* [writable](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#writable)
* [writableFinished](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#writablefinished)
* [writableHighWaterMark](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#writablehighwatermark)
* [writableLength](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#writablelength)
* [writableObjectMode](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#writableobjectmode)

### Methods

* [[Symbol.asyncIterator]](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#[symbol.asynciterator])
* [\_destroy](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#_destroy)
* [\_final](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#_final)
* [\_read](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#_read)
* [\_write](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#_write)
* [\_writev](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#_writev)
* [addListener](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#addlistener)
* [address](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#address)
* [clearLine](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#clearline)
* [clearScreenDown](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#clearscreendown)
* [connect](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#connect)
* [cork](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#cork)
* [cursorTo](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#cursorto)
* [destroy](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#destroy)
* [emit](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#emit)
* [end](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#end)
* [eventNames](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#eventnames)
* [getColorDepth](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#getcolordepth)
* [getMaxListeners](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#getmaxlisteners)
* [getWindowSize](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#getwindowsize)
* [hasColors](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#hascolors)
* [isPaused](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#ispaused)
* [listenerCount](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#listenercount)
* [listeners](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#listeners)
* [moveCursor](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#movecursor)
* [off](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#off)
* [on](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#on)
* [once](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#once)
* [pause](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#pause)
* [pipe](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#pipe)
* [prependListener](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#prependlistener)
* [prependOnceListener](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#prependoncelistener)
* [push](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#push)
* [rawListeners](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#rawlisteners)
* [read](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#read)
* [ref](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#ref)
* [removeAllListeners](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#removealllisteners)
* [removeListener](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#removelistener)
* [resume](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#resume)
* [setDefaultEncoding](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#setdefaultencoding)
* [setEncoding](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#setencoding)
* [setKeepAlive](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#setkeepalive)
* [setMaxListeners](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#setmaxlisteners)
* [setNoDelay](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#setnodelay)
* [setTimeout](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#settimeout)
* [uncork](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#uncork)
* [unpipe](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#unpipe)
* [unref](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#unref)
* [unshift](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#unshift)
* [wrap](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#wrap)
* [write](_lib_output_streams_simple_write_stream_base_index_.simplewritestreambase.md#write)

## Properties

### bufferSize

• `Readonly` **bufferSize**: number

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:24*

___

### bytesRead

• `Readonly` **bytesRead**: number

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:25*

___

### bytesWritten

• `Readonly` **bytesWritten**: number

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:26*

___

### columns

•  **columns**: number

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:21*

___

### connecting

• `Readonly` **connecting**: boolean

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:27*

___

### destroyed

• `Readonly` **destroyed**: boolean

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:28*

___

### isTTY

•  **isTTY**: true

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:22*

___

### localAddress

• `Readonly` **localAddress**: string

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:29*

___

### localPort

• `Readonly` **localPort**: number

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:30*

___

### readable

•  **readable**: boolean

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:19*

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: number

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:31*

___

### readableLength

• `Readonly` **readableLength**: number

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:32*

___

### readableObjectMode

• `Readonly` **readableObjectMode**: boolean

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:33*

___

### remoteAddress

• `Readonly` **remoteAddress**: string

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:34*

___

### remoteFamily

• `Readonly` **remoteFamily**: string

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:35*

___

### remotePort

• `Readonly` **remotePort**: number

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:36*

___

### rows

•  **rows**: number

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:23*

___

### writable

•  **writable**: boolean

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:20*

___

### writableFinished

• `Readonly` **writableFinished**: boolean

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:37*

___

### writableHighWaterMark

•  **writableHighWaterMark**: number

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:17*

___

### writableLength

•  **writableLength**: number

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:18*

___

### writableObjectMode

• `Readonly` **writableObjectMode**: boolean

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:38*

## Methods

### [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): AsyncIterableIterator\<string \| Buffer>

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:99*

**Returns:** AsyncIterableIterator\<string \| Buffer>

___

### \_destroy

▸ **_destroy**(`err`: [Error](../interfaces/_implementations_object_formats_interfaces_.errorobject.md#error), `callback`: Function): void

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

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:52*

#### Parameters:

Name | Type |
------ | ------ |
`callback` | Function |

**Returns:** void

___

### \_read

▸ **_read**(`size`: number): void

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:168*

#### Parameters:

Name | Type |
------ | ------ |
`size` | number |

**Returns:** void

___

### \_write

▸ **_write**(`chunk`: any, `encoding`: string, `callback`: Function): void

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

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:179*

**Returns:** AddressInfo \| string

___

### clearLine

▸ **clearLine**(`dir`: -1 \| 0 \| 1, `callback?`: undefined \| () => void): boolean

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

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:187*

#### Parameters:

Name | Type |
------ | ------ |
`callback?` | undefined \| () => void |

**Returns:** boolean

___

### connect

▸ **connect**(`options`: TcpSocketConnectOpts \| IpcSocketConnectOpts, `connectionListener?`: undefined \| () => void): this

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:191*

#### Parameters:

Name | Type |
------ | ------ |
`options` | TcpSocketConnectOpts \| IpcSocketConnectOpts |
`connectionListener?` | undefined \| () => void |

**Returns:** this

▸ **connect**(`port`: number, `host`: string, `connectionListener?`: undefined \| () => void): this

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:195*

#### Parameters:

Name | Type |
------ | ------ |
`port` | number |
`host` | string |
`connectionListener?` | undefined \| () => void |

**Returns:** this

▸ **connect**(`port`: number, `connectionListener?`: undefined \| () => void): this

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:196*

#### Parameters:

Name | Type |
------ | ------ |
`port` | number |
`connectionListener?` | undefined \| () => void |

**Returns:** this

▸ **connect**(`path`: string, `connectionListener?`: undefined \| () => void): this

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

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:58*

**Returns:** void

___

### cursorTo

▸ **cursorTo**(`x`: number, `y?`: undefined \| number, `callback?`: undefined \| () => void): boolean

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:206*

#### Parameters:

Name | Type |
------ | ------ |
`x` | number |
`y?` | undefined \| number |
`callback?` | undefined \| () => void |

**Returns:** boolean

▸ **cursorTo**(`x`: number, `callback`: () => void): boolean

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

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:64*

#### Parameters:

Name | Type |
------ | ------ |
`error?` | [Error](../interfaces/_implementations_object_formats_interfaces_.errorobject.md#error) |

**Returns:** void

___

### emit

▸ **emit**(`event`: string \| symbol, ...`args`: any[]): boolean

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

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:160*

#### Parameters:

Name | Type |
------ | ------ |
`cb?` | Function |

**Returns:** void

▸ **end**(`buffer`: Buffer, `cb?`: Function): void

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:161*

#### Parameters:

Name | Type |
------ | ------ |
`buffer` | Buffer |
`cb?` | Function |

**Returns:** void

▸ **end**(`str`: string, `cb?`: Function): void

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:162*

#### Parameters:

Name | Type |
------ | ------ |
`str` | string |
`cb?` | Function |

**Returns:** void

▸ **end**(`str`: string, `encoding?`: undefined \| string, `cb?`: Function): void

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

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:156*

**Returns:** (string \| symbol)[]

___

### getColorDepth

▸ **getColorDepth**(`env?`: undefined \| {}): number

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:216*

#### Parameters:

Name | Type |
------ | ------ |
`env?` | undefined \| {} |

**Returns:** number

___

### getMaxListeners

▸ **getMaxListeners**(): number

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:129*

**Returns:** number

___

### getWindowSize

▸ **getWindowSize**(): [number, number]

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:220*

**Returns:** [number, number]

___

### hasColors

▸ **hasColors**(`depth?`: undefined \| number): boolean

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:224*

#### Parameters:

Name | Type |
------ | ------ |
`depth?` | undefined \| number |

**Returns:** boolean

▸ **hasColors**(`env?`: undefined \| {}): boolean

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:225*

#### Parameters:

Name | Type |
------ | ------ |
`env?` | undefined \| {} |

**Returns:** boolean

▸ **hasColors**(`depth`: number, `env?`: undefined \| {}): boolean

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

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:79*

**Returns:** boolean

___

### listenerCount

▸ **listenerCount**(`type`: string \| symbol): number

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:141*

#### Parameters:

Name | Type |
------ | ------ |
`type` | string \| symbol |

**Returns:** number

___

### listeners

▸ **listeners**(`event`: string \| symbol): Function[]

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:132*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

### moveCursor

▸ **moveCursor**(`dx`: number, `dy`: number, `callback?`: undefined \| () => void): boolean

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

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:73*

**Returns:** this

___

### pipe

▸ **pipe**\<T>(`destination`: T, `options?`: undefined \| { end?: undefined \| false \| true  }): T

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

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:135*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

### read

▸ **read**(`size?`: undefined \| number): string \| Buffer

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:67*

#### Parameters:

Name | Type |
------ | ------ |
`size?` | undefined \| number |

**Returns:** string \| Buffer

___

### ref

▸ **ref**(): void

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:239*

**Returns:** void

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: string \| symbol): this

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:123*

#### Parameters:

Name | Type |
------ | ------ |
`event?` | string \| symbol |

**Returns:** this

___

### removeListener

▸ **removeListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

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

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:76*

**Returns:** this

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`: string): this

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:55*

#### Parameters:

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** this

___

### setEncoding

▸ **setEncoding**(`encoding`: string): this

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:70*

#### Parameters:

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** this

___

### setKeepAlive

▸ **setKeepAlive**(`enable?`: undefined \| false \| true, `initialDelay?`: undefined \| number): this

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

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:126*

#### Parameters:

Name | Type |
------ | ------ |
`n` | number |

**Returns:** this

___

### setNoDelay

▸ **setNoDelay**(`noDelay?`: undefined \| false \| true): this

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:247*

#### Parameters:

Name | Type |
------ | ------ |
`noDelay?` | undefined \| false \| true |

**Returns:** this

___

### setTimeout

▸ **setTimeout**(`timeout`: number, `callback?`: undefined \| () => void): this

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

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:61*

**Returns:** void

___

### unpipe

▸ **unpipe**(`destination?`: NodeJS.WritableStream): this

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:88*

#### Parameters:

Name | Type |
------ | ------ |
`destination?` | NodeJS.WritableStream |

**Returns:** this

___

### unref

▸ **unref**(): void

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:255*

**Returns:** void

___

### unshift

▸ **unshift**(`chunk`: string): void

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:91*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | string |

**Returns:** void

▸ **unshift**(`chunk`: Buffer): void

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:92*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | Buffer |

**Returns:** void

___

### wrap

▸ **wrap**(`oldStream`: ReadableStream): this

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:96*

#### Parameters:

Name | Type |
------ | ------ |
`oldStream` | ReadableStream |

**Returns:** this

___

### write

▸ **write**(`str`: any, `encoding?`: any, `cb?`: any): boolean

*Defined in src/lib/output-streams/simple-write-stream-base/index.ts:42*

#### Parameters:

Name | Type |
------ | ------ |
`str` | any |
`encoding?` | any |
`cb?` | any |

**Returns:** boolean
