**[@qest/logger-utils](../README.md)**

> [Globals](../README.md) / ["implementations/object-formats/interfaces"](../modules/_implementations_object_formats_interfaces_.md) / BaseLogObject

# Interface: BaseLogObject

Standardized log object format.
This is what we are using internally **!!in our implementations!!** to represent the logged information.
And also our internal log and error streams will look for information defined in this type and will try to use it.

If you send a object that extends the BaseLogObject to he logger `logger.info(extendsBaseLogObject)`
we will extract all the properties and use as much of the information provided.

## Hierarchy

* **BaseLogObject**

  ↳ [WithErrorLogObject](_implementations_object_formats_interfaces_.witherrorlogobject.md)

  ↳ [FlatLogObject](_implementations_object_formats_interfaces_.flatlogobject.md)

## Indexable

▪ [key: string]: any

Standardized log object format.
This is what we are using internally **!!in our implementations!!** to represent the logged information.
And also our internal log and error streams will look for information defined in this type and will try to use it.

If you send a object that extends the BaseLogObject to he logger `logger.info(extendsBaseLogObject)`
we will extract all the properties and use as much of the information provided.

## Index

### Properties

* [hostname](_implementations_object_formats_interfaces_.baselogobject.md#hostname)
* [level](_implementations_object_formats_interfaces_.baselogobject.md#level)
* [msg](_implementations_object_formats_interfaces_.baselogobject.md#msg)
* [name](_implementations_object_formats_interfaces_.baselogobject.md#name)
* [pid](_implementations_object_formats_interfaces_.baselogobject.md#pid)
* [time](_implementations_object_formats_interfaces_.baselogobject.md#time)
* [v](_implementations_object_formats_interfaces_.baselogobject.md#v)

## Properties

### hostname

• `Optional` **hostname**: undefined \| string

*Defined in src/implementations/object-formats/interfaces.ts:38*

___

### level

•  **level**: number

*Defined in src/implementations/object-formats/interfaces.ts:34*

___

### msg

• `Optional` **msg**: undefined \| string

*Defined in src/implementations/object-formats/interfaces.ts:36*

___

### name

• `Optional` **name**: undefined \| string

*Defined in src/implementations/object-formats/interfaces.ts:39*

___

### pid

• `Optional` **pid**: undefined \| number

*Defined in src/implementations/object-formats/interfaces.ts:37*

___

### time

•  **time**: string \| number

*Defined in src/implementations/object-formats/interfaces.ts:35*

___

### v

• `Optional` **v**: undefined \| number

*Defined in src/implementations/object-formats/interfaces.ts:40*
