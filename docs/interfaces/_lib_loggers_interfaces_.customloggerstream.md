**[@qest/logger-utils](../README.md)**

> [Globals](../README.md) / ["lib/loggers/interfaces"](../modules/_lib_loggers_interfaces_.md) / CustomLoggerStream

# Interface: CustomLoggerStream

## Hierarchy

* **CustomLoggerStream**

## Index

### Properties

* [enabled](_lib_loggers_interfaces_.customloggerstream.md#enabled)
* [level](_lib_loggers_interfaces_.customloggerstream.md#level)
* [stream](_lib_loggers_interfaces_.customloggerstream.md#stream)

## Properties

### enabled

•  **enabled**: boolean

*Defined in src/lib/loggers/interfaces.ts:42*

Enable or disable this specific stream.

___

### level

•  **level**: [Level](../enums/_lib_loggers_interfaces_.level.md)

*Defined in src/lib/loggers/interfaces.ts:32*

This depends on the logger used.

But in most cases this sets the minimum level at which the specific stream will be invoked.
For example if you set this to Level.INFO you will only get INFO, WARN, ERROR and FATAL but not DEBUG or TRACE

Refer to the used logger for more info...

___

### stream

•  **stream**: WriteStream \| WriteStream

*Defined in src/lib/loggers/interfaces.ts:38*

Any stream implementing the required interface.

These streams are then utilized by the selected logger.
