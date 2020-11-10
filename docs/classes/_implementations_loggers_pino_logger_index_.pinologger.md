**[@qest/logger-utils](../README.md)**

> [Globals](../README.md) / ["implementations/loggers/pino-logger/index"](../modules/_implementations_loggers_pino_logger_index_.md) / PinoLogger

# Class: PinoLogger

## Hierarchy

* **PinoLogger**

## Implements

* [Logger](../interfaces/_lib_loggers_interfaces_.logger.md)

## Index

### Constructors

* [constructor](_implementations_loggers_pino_logger_index_.pinologger.md#constructor)

### Methods

* [debug](_implementations_loggers_pino_logger_index_.pinologger.md#debug)
* [error](_implementations_loggers_pino_logger_index_.pinologger.md#error)
* [fatal](_implementations_loggers_pino_logger_index_.pinologger.md#fatal)
* [info](_implementations_loggers_pino_logger_index_.pinologger.md#info)
* [trace](_implementations_loggers_pino_logger_index_.pinologger.md#trace)
* [warn](_implementations_loggers_pino_logger_index_.pinologger.md#warn)

## Constructors

### constructor

\+ **new PinoLogger**(`options`: [PinoLoggerOptions](../interfaces/_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md)): [PinoLogger](_implementations_loggers_pino_logger_index_.pinologger.md)

*Defined in src/implementations/loggers/pino-logger/index.ts:9*

#### Parameters:

Name | Type |
------ | ------ |
`options` | [PinoLoggerOptions](../interfaces/_implementations_loggers_pino_logger_interfaces_.pinologgeroptions.md) |

**Returns:** [PinoLogger](_implementations_loggers_pino_logger_index_.pinologger.md)

## Methods

### debug

▸ **debug**(`msg`: [MsgType](../modules/_lib_loggers_interfaces_.md#msgtype), ...`args`: any[]): void

*Defined in src/implementations/loggers/pino-logger/index.ts:61*

#### Parameters:

Name | Type |
------ | ------ |
`msg` | [MsgType](../modules/_lib_loggers_interfaces_.md#msgtype) |
`...args` | any[] |

**Returns:** void

___

### error

▸ **error**(`msg`: [MsgType](../modules/_lib_loggers_interfaces_.md#msgtype), ...`args`: any[]): void

*Defined in src/implementations/loggers/pino-logger/index.ts:49*

#### Parameters:

Name | Type |
------ | ------ |
`msg` | [MsgType](../modules/_lib_loggers_interfaces_.md#msgtype) |
`...args` | any[] |

**Returns:** void

___

### fatal

▸ **fatal**(`msg`: [MsgType](../modules/_lib_loggers_interfaces_.md#msgtype), ...`args`: any[]): void

*Defined in src/implementations/loggers/pino-logger/index.ts:45*

#### Parameters:

Name | Type |
------ | ------ |
`msg` | [MsgType](../modules/_lib_loggers_interfaces_.md#msgtype) |
`...args` | any[] |

**Returns:** void

___

### info

▸ **info**(`msg`: [MsgType](../modules/_lib_loggers_interfaces_.md#msgtype), ...`args`: any[]): void

*Defined in src/implementations/loggers/pino-logger/index.ts:57*

#### Parameters:

Name | Type |
------ | ------ |
`msg` | [MsgType](../modules/_lib_loggers_interfaces_.md#msgtype) |
`...args` | any[] |

**Returns:** void

___

### trace

▸ **trace**(`msg`: [MsgType](../modules/_lib_loggers_interfaces_.md#msgtype), ...`args`: any[]): void

*Defined in src/implementations/loggers/pino-logger/index.ts:65*

#### Parameters:

Name | Type |
------ | ------ |
`msg` | [MsgType](../modules/_lib_loggers_interfaces_.md#msgtype) |
`...args` | any[] |

**Returns:** void

___

### warn

▸ **warn**(`msg`: [MsgType](../modules/_lib_loggers_interfaces_.md#msgtype), ...`args`: any[]): void

*Defined in src/implementations/loggers/pino-logger/index.ts:53*

#### Parameters:

Name | Type |
------ | ------ |
`msg` | [MsgType](../modules/_lib_loggers_interfaces_.md#msgtype) |
`...args` | any[] |

**Returns:** void
