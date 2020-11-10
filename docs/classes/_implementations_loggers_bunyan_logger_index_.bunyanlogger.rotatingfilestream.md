**[@qest/logger-utils](../README.md)**

> [Globals](../README.md) / ["implementations/loggers/bunyan-logger/index"](../modules/_implementations_loggers_bunyan_logger_index_.md) / [BunyanLogger](_implementations_loggers_bunyan_logger_index_.bunyanlogger.md) / RotatingFileStream

# Class: RotatingFileStream

## Hierarchy

* **RotatingFileStream**

## Index

### Constructors

* [constructor](_implementations_loggers_bunyan_logger_index_.bunyanlogger.rotatingfilestream.md#constructor)

### Properties

* [periodNum](_implementations_loggers_bunyan_logger_index_.bunyanlogger.rotatingfilestream.md#periodnum)
* [periodScope](_implementations_loggers_bunyan_logger_index_.bunyanlogger.rotatingfilestream.md#periodscope)
* [rotQueue](_implementations_loggers_bunyan_logger_index_.bunyanlogger.rotatingfilestream.md#rotqueue)
* [rotating](_implementations_loggers_bunyan_logger_index_.bunyanlogger.rotatingfilestream.md#rotating)
* [stream](_implementations_loggers_bunyan_logger_index_.bunyanlogger.rotatingfilestream.md#stream)
* [writable](_implementations_loggers_bunyan_logger_index_.bunyanlogger.rotatingfilestream.md#writable)

### Methods

* [destroy](_implementations_loggers_bunyan_logger_index_.bunyanlogger.rotatingfilestream.md#destroy)
* [destroySoon](_implementations_loggers_bunyan_logger_index_.bunyanlogger.rotatingfilestream.md#destroysoon)
* [end](_implementations_loggers_bunyan_logger_index_.bunyanlogger.rotatingfilestream.md#end)
* [rotate](_implementations_loggers_bunyan_logger_index_.bunyanlogger.rotatingfilestream.md#rotate)
* [write](_implementations_loggers_bunyan_logger_index_.bunyanlogger.rotatingfilestream.md#write)

## Constructors

### constructor

\+ **new RotatingFileStream**(`options`: [RotatingFileStreamOptions](../interfaces/_implementations_loggers_bunyan_logger_index_.bunyanlogger.rotatingfilestreamoptions.md)): [RotatingFileStream](_implementations_loggers_bunyan_logger_index_.bunyanlogger.rotatingfilestream.md)

*Defined in node_modules/@types/bunyan/index.d.ts:280*

#### Parameters:

Name | Type |
------ | ------ |
`options` | [RotatingFileStreamOptions](../interfaces/_implementations_loggers_bunyan_logger_index_.bunyanlogger.rotatingfilestreamoptions.md) |

**Returns:** [RotatingFileStream](_implementations_loggers_bunyan_logger_index_.bunyanlogger.rotatingfilestream.md)

## Properties

### periodNum

•  **periodNum**: number

*Defined in node_modules/@types/bunyan/index.d.ts:284*

___

### periodScope

•  **periodScope**: string

*Defined in node_modules/@types/bunyan/index.d.ts:285*

___

### rotQueue

•  **rotQueue**: any[]

*Defined in node_modules/@types/bunyan/index.d.ts:287*

___

### rotating

•  **rotating**: boolean

*Defined in node_modules/@types/bunyan/index.d.ts:288*

___

### stream

•  **stream**: any

*Defined in node_modules/@types/bunyan/index.d.ts:286*

___

### writable

•  **writable**: boolean

*Defined in node_modules/@types/bunyan/index.d.ts:283*

## Methods

### destroy

▸ **destroy**(): void

*Defined in node_modules/@types/bunyan/index.d.ts:292*

**Returns:** void

___

### destroySoon

▸ **destroySoon**(): void

*Defined in node_modules/@types/bunyan/index.d.ts:293*

**Returns:** void

___

### end

▸ **end**(`record?`: any): void

*Defined in node_modules/@types/bunyan/index.d.ts:291*

#### Parameters:

Name | Type |
------ | ------ |
`record?` | any |

**Returns:** void

___

### rotate

▸ **rotate**(): void

*Defined in node_modules/@types/bunyan/index.d.ts:294*

**Returns:** void

___

### write

▸ **write**(`record`: any): boolean

*Defined in node_modules/@types/bunyan/index.d.ts:290*

#### Parameters:

Name | Type |
------ | ------ |
`record` | any |

**Returns:** boolean
