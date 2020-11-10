**[@qest/logger-utils](../README.md)**

> [Globals](../README.md) / ["implementations/loggers/bunyan-logger/index"](../modules/_implementations_loggers_bunyan_logger_index_.md) / [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md) / RingBuffer

# Class: RingBuffer

## Hierarchy

* **RingBuffer**

## Index

### Constructors

* [constructor](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#constructor)

### Properties

* [records](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#records)
* [writable](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#writable)
* [defaultMaxListeners](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#defaultmaxlisteners)

### Methods

* [addListener](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#addlistener)
* [destroy](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#destroy)
* [destroySoon](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#destroysoon)
* [emit](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#emit)
* [end](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#end)
* [eventNames](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#eventnames)
* [getMaxListeners](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#getmaxlisteners)
* [listenerCount](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#listenercount)
* [listeners](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#listeners)
* [off](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#off)
* [on](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#on)
* [once](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#once)
* [prependListener](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#prependlistener)
* [prependOnceListener](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#prependoncelistener)
* [rawListeners](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#rawlisteners)
* [removeAllListeners](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#removealllisteners)
* [removeListener](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#removelistener)
* [setMaxListeners](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#setmaxlisteners)
* [write](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#write)
* [listenerCount](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md#listenercount)

## Constructors

### constructor

\+ **new RingBuffer**(`options`: [RingBufferOptions](../interfaces/_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbufferoptions.md)): [RingBuffer](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md)

*Defined in node_modules/@types/bunyan/index.d.ts:262*

#### Parameters:

Name | Type |
------ | ------ |
`options` | [RingBufferOptions](../interfaces/_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbufferoptions.md) |

**Returns:** [RingBuffer](_implementations_loggers_bunyan_logger_index_.bunyanlogger.ringbuffer.md)

## Properties

### records

•  **records**: any[]

*Defined in node_modules/@types/bunyan/index.d.ts:266*

___

### writable

•  **writable**: boolean

*Defined in node_modules/@types/bunyan/index.d.ts:265*

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: number

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[defaultMaxListeners](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#defaultmaxlisteners)*

*Defined in node_modules/@types/node/events.d.ts:18*

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

### destroy

▸ **destroy**(): void

*Defined in node_modules/@types/bunyan/index.d.ts:270*

**Returns:** void

___

### destroySoon

▸ **destroySoon**(): void

*Defined in node_modules/@types/bunyan/index.d.ts:271*

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

### end

▸ **end**(`record?`: any): void

*Defined in node_modules/@types/bunyan/index.d.ts:269*

#### Parameters:

Name | Type |
------ | ------ |
`record?` | any |

**Returns:** void

___

### eventNames

▸ **eventNames**(): Array\<string \| symbol>

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[eventNames](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#eventnames)*

*Overrides void*

*Defined in node_modules/@types/node/events.d.ts:33*

**Returns:** Array\<string \| symbol>

___

### getMaxListeners

▸ **getMaxListeners**(): number

*Inherited from [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md).[getMaxListeners](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#getmaxlisteners)*

*Overrides void*

*Defined in node_modules/@types/node/events.d.ts:29*

**Returns:** number

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

### write

▸ **write**(`record`: any): boolean

*Defined in node_modules/@types/bunyan/index.d.ts:268*

#### Parameters:

Name | Type |
------ | ------ |
`record` | any |

**Returns:** boolean

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
