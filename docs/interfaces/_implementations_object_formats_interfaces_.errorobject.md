**[@qest/logger-utils](../README.md)**

> [Globals](../README.md) / ["implementations/object-formats/interfaces"](../modules/_implementations_object_formats_interfaces_.md) / ErrorObject

# Interface: ErrorObject

## Hierarchy

* [Error](_implementations_object_formats_interfaces_.errorobject.md#error)

  ↳ **ErrorObject**

  ↳↳ [HandlerError](_implementations_object_formats_interfaces_.handlererror.md)

## Indexable

▪ [key: string]: any

## Index

### Properties

* [Error](_implementations_object_formats_interfaces_.errorobject.md#error)
* [code](_implementations_object_formats_interfaces_.errorobject.md#code)
* [fingerprint](_implementations_object_formats_interfaces_.errorobject.md#fingerprint)
* [message](_implementations_object_formats_interfaces_.errorobject.md#message)
* [name](_implementations_object_formats_interfaces_.errorobject.md#name)
* [payload](_implementations_object_formats_interfaces_.errorobject.md#payload)
* [req](_implementations_object_formats_interfaces_.errorobject.md#req)
* [stack](_implementations_object_formats_interfaces_.errorobject.md#stack)
* [type](_implementations_object_formats_interfaces_.errorobject.md#type)
* [user](_implementations_object_formats_interfaces_.errorobject.md#user)

## Properties

### Error

•  **Error**: ErrorConstructor

*Defined in node_modules/typescript/lib/lib.es5.d.ts:984*

___

### code

• `Optional` **code**: number \| string

*Defined in src/implementations/object-formats/interfaces.ts:47*

___

### fingerprint

• `Optional` **fingerprint**: undefined \| string

*Defined in src/implementations/object-formats/interfaces.ts:45*

___

### message

•  **message**: string

*Inherited from [ErrorObject](_implementations_object_formats_interfaces_.errorobject.md).[message](_implementations_object_formats_interfaces_.errorobject.md#message)*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:974*

___

### name

•  **name**: string

*Inherited from [ErrorObject](_implementations_object_formats_interfaces_.errorobject.md).[name](_implementations_object_formats_interfaces_.errorobject.md#name)*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:973*

___

### payload

• `Optional` **payload**: any

*Defined in src/implementations/object-formats/interfaces.ts:50*

___

### req

• `Optional` **req**: PseudoRequest

*Defined in src/implementations/object-formats/interfaces.ts:48*

___

### stack

• `Optional` **stack**: undefined \| string

*Inherited from [ErrorObject](_implementations_object_formats_interfaces_.errorobject.md).[stack](_implementations_object_formats_interfaces_.errorobject.md#stack)*

*Overrides [ErrorObject](_implementations_object_formats_interfaces_.errorobject.md).[stack](_implementations_object_formats_interfaces_.errorobject.md#stack)*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:975*

___

### type

• `Optional` **type**: undefined \| string

*Defined in src/implementations/object-formats/interfaces.ts:46*

___

### user

• `Optional` **user**: Object

*Defined in src/implementations/object-formats/interfaces.ts:49*
