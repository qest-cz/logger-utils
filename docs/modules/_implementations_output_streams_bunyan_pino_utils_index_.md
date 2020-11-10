**[@qest/logger-utils](../README.md)**

> [Globals](../README.md) / "implementations/output-streams/bunyan-pino-utils/index"

# Module: "implementations/output-streams/bunyan-pino-utils/index"

## Index

### Functions

* [makeFlatStructureFromError](_implementations_output_streams_bunyan_pino_utils_index_.md#makeflatstructurefromerror)
* [makeObject](_implementations_output_streams_bunyan_pino_utils_index_.md#makeobject)
* [objectFromStringRecord](_implementations_output_streams_bunyan_pino_utils_index_.md#objectfromstringrecord)

## Functions

### makeFlatStructureFromError

▸ `Const`**makeFlatStructureFromError**(`data`: [WithErrorLogObject](../interfaces/_implementations_object_formats_interfaces_.witherrorlogobject.md) \| [FlatLogObject](../interfaces/_implementations_object_formats_interfaces_.flatlogobject.md)): [FlatLogObject](../interfaces/_implementations_object_formats_interfaces_.flatlogobject.md)

*Defined in src/implementations/output-streams/bunyan-pino-utils/index.ts:30*

#### Parameters:

Name | Type |
------ | ------ |
`data` | [WithErrorLogObject](../interfaces/_implementations_object_formats_interfaces_.witherrorlogobject.md) \| [FlatLogObject](../interfaces/_implementations_object_formats_interfaces_.flatlogobject.md) |

**Returns:** [FlatLogObject](../interfaces/_implementations_object_formats_interfaces_.flatlogobject.md)

___

### makeObject

▸ `Const`**makeObject**(`recordString`: string): [FlatLogObject](../interfaces/_implementations_object_formats_interfaces_.flatlogobject.md) \| null

*Defined in src/implementations/output-streams/bunyan-pino-utils/index.ts:8*

#### Parameters:

Name | Type |
------ | ------ |
`recordString` | string |

**Returns:** [FlatLogObject](../interfaces/_implementations_object_formats_interfaces_.flatlogobject.md) \| null

___

### objectFromStringRecord

▸ `Const`**objectFromStringRecord**(`recordString`: string): [BaseLogObject](../interfaces/_implementations_object_formats_interfaces_.baselogobject.md) \| null

*Defined in src/implementations/output-streams/bunyan-pino-utils/index.ts:16*

#### Parameters:

Name | Type |
------ | ------ |
`recordString` | string |

**Returns:** [BaseLogObject](../interfaces/_implementations_object_formats_interfaces_.baselogobject.md) \| null
