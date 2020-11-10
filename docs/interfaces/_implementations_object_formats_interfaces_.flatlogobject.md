**[@qest/logger-utils](../README.md)**

> [Globals](../README.md) / ["implementations/object-formats/interfaces"](../modules/_implementations_object_formats_interfaces_.md) / FlatLogObject

# Interface: FlatLogObject

Standardized log object format

See [BaseLogObject](_implementations_object_formats_interfaces_.baselogobject.md) for more info

## Hierarchy

* [BaseLogObject](_implementations_object_formats_interfaces_.baselogobject.md)

  ↳ **FlatLogObject**

## Indexable

▪ [key: string]: any

Standardized log object format

See [BaseLogObject](_implementations_object_formats_interfaces_.baselogobject.md) for more info

## Index

### Properties

* [code](_implementations_object_formats_interfaces_.flatlogobject.md#code)
* [hostname](_implementations_object_formats_interfaces_.flatlogobject.md#hostname)
* [level](_implementations_object_formats_interfaces_.flatlogobject.md#level)
* [msg](_implementations_object_formats_interfaces_.flatlogobject.md#msg)
* [name](_implementations_object_formats_interfaces_.flatlogobject.md#name)
* [payload](_implementations_object_formats_interfaces_.flatlogobject.md#payload)
* [pid](_implementations_object_formats_interfaces_.flatlogobject.md#pid)
* [req](_implementations_object_formats_interfaces_.flatlogobject.md#req)
* [stack](_implementations_object_formats_interfaces_.flatlogobject.md#stack)
* [time](_implementations_object_formats_interfaces_.flatlogobject.md#time)
* [type](_implementations_object_formats_interfaces_.flatlogobject.md#type)
* [user](_implementations_object_formats_interfaces_.flatlogobject.md#user)
* [v](_implementations_object_formats_interfaces_.flatlogobject.md#v)

## Properties

### code

• `Optional` **code**: number \| string

*Defined in src/implementations/object-formats/interfaces.ts:19*

___

### hostname

• `Optional` **hostname**: undefined \| string

*Inherited from [WithErrorLogObject](_implementations_object_formats_interfaces_.witherrorlogobject.md).[hostname](_implementations_object_formats_interfaces_.witherrorlogobject.md#hostname)*

*Defined in src/implementations/object-formats/interfaces.ts:38*

___

### level

•  **level**: number

*Inherited from [WithErrorLogObject](_implementations_object_formats_interfaces_.witherrorlogobject.md).[level](_implementations_object_formats_interfaces_.witherrorlogobject.md#level)*

*Defined in src/implementations/object-formats/interfaces.ts:34*

___

### msg

• `Optional` **msg**: undefined \| string

*Inherited from [WithErrorLogObject](_implementations_object_formats_interfaces_.witherrorlogobject.md).[msg](_implementations_object_formats_interfaces_.witherrorlogobject.md#msg)*

*Defined in src/implementations/object-formats/interfaces.ts:36*

___

### name

• `Optional` **name**: undefined \| string

*Inherited from [WithErrorLogObject](_implementations_object_formats_interfaces_.witherrorlogobject.md).[name](_implementations_object_formats_interfaces_.witherrorlogobject.md#name)*

*Defined in src/implementations/object-formats/interfaces.ts:39*

___

### payload

• `Optional` **payload**: any

*Defined in src/implementations/object-formats/interfaces.ts:22*

___

### pid

• `Optional` **pid**: undefined \| number

*Inherited from [WithErrorLogObject](_implementations_object_formats_interfaces_.witherrorlogobject.md).[pid](_implementations_object_formats_interfaces_.witherrorlogobject.md#pid)*

*Defined in src/implementations/object-formats/interfaces.ts:37*

___

### req

• `Optional` **req**: PseudoRequest

*Defined in src/implementations/object-formats/interfaces.ts:20*

___

### stack

• `Optional` **stack**: undefined \| string

*Defined in src/implementations/object-formats/interfaces.ts:18*

___

### time

•  **time**: string \| number

*Inherited from [WithErrorLogObject](_implementations_object_formats_interfaces_.witherrorlogobject.md).[time](_implementations_object_formats_interfaces_.witherrorlogobject.md#time)*

*Defined in src/implementations/object-formats/interfaces.ts:35*

___

### type

• `Optional` **type**: undefined \| string

*Defined in src/implementations/object-formats/interfaces.ts:17*

___

### user

• `Optional` **user**: Object

*Defined in src/implementations/object-formats/interfaces.ts:21*

___

### v

• `Optional` **v**: undefined \| number

*Inherited from [WithErrorLogObject](_implementations_object_formats_interfaces_.witherrorlogobject.md).[v](_implementations_object_formats_interfaces_.witherrorlogobject.md#v)*

*Defined in src/implementations/object-formats/interfaces.ts:40*
