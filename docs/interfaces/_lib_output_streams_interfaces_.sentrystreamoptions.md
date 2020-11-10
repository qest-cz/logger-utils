**[@qest/logger-utils](../README.md)**

> [Globals](../README.md) / ["lib/output-streams/interfaces"](../modules/_lib_output_streams_interfaces_.md) / SentryStreamOptions

# Interface: SentryStreamOptions

## Hierarchy

* [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md)

  ↳ **SentryStreamOptions**

## Index

### Properties

* [attachStacktrace](_lib_output_streams_interfaces_.sentrystreamoptions.md#attachstacktrace)
* [caCerts](_lib_output_streams_interfaces_.sentrystreamoptions.md#cacerts)
* [debug](_lib_output_streams_interfaces_.sentrystreamoptions.md#debug)
* [defaultIntegrations](_lib_output_streams_interfaces_.sentrystreamoptions.md#defaultintegrations)
* [dist](_lib_output_streams_interfaces_.sentrystreamoptions.md#dist)
* [dsn](_lib_output_streams_interfaces_.sentrystreamoptions.md#dsn)
* [enableDedupe](_lib_output_streams_interfaces_.sentrystreamoptions.md#enablededupe)
* [enabled](_lib_output_streams_interfaces_.sentrystreamoptions.md#enabled)
* [environment](_lib_output_streams_interfaces_.sentrystreamoptions.md#environment)
* [frameContextLines](_lib_output_streams_interfaces_.sentrystreamoptions.md#framecontextlines)
* [httpProxy](_lib_output_streams_interfaces_.sentrystreamoptions.md#httpproxy)
* [httpsProxy](_lib_output_streams_interfaces_.sentrystreamoptions.md#httpsproxy)
* [ignoreErrors](_lib_output_streams_interfaces_.sentrystreamoptions.md#ignoreerrors)
* [integrations](_lib_output_streams_interfaces_.sentrystreamoptions.md#integrations)
* [logLevel](_lib_output_streams_interfaces_.sentrystreamoptions.md#loglevel)
* [maxBreadcrumbs](_lib_output_streams_interfaces_.sentrystreamoptions.md#maxbreadcrumbs)
* [maxValueLength](_lib_output_streams_interfaces_.sentrystreamoptions.md#maxvaluelength)
* [release](_lib_output_streams_interfaces_.sentrystreamoptions.md#release)
* [sampleRate](_lib_output_streams_interfaces_.sentrystreamoptions.md#samplerate)
* [serverName](_lib_output_streams_interfaces_.sentrystreamoptions.md#servername)
* [shutdownTimeout](_lib_output_streams_interfaces_.sentrystreamoptions.md#shutdowntimeout)
* [transport](_lib_output_streams_interfaces_.sentrystreamoptions.md#transport)
* [transportOptions](_lib_output_streams_interfaces_.sentrystreamoptions.md#transportoptions)

### Methods

* [beforeBreadcrumb](_lib_output_streams_interfaces_.sentrystreamoptions.md#beforebreadcrumb)
* [beforeSend](_lib_output_streams_interfaces_.sentrystreamoptions.md#beforesend)
* [onFatalError](_lib_output_streams_interfaces_.sentrystreamoptions.md#onfatalerror)

## Properties

### attachStacktrace

• `Optional` **attachStacktrace**: undefined \| false \| true

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[attachStacktrace](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#attachstacktrace)*

*Defined in node_modules/@sentry/types/dist/options.d.ts:67*

Attaches stacktraces to pure capture message / log integrations

___

### caCerts

• `Optional` **caCerts**: undefined \| string

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[caCerts](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#cacerts)*

*Defined in node_modules/@sentry/node/dist/backend.d.ts:19*

HTTPS proxy certificates path

___

### debug

• `Optional` **debug**: undefined \| false \| true

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[debug](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#debug)*

*Defined in node_modules/@sentry/types/dist/options.d.ts:11*

Enable debug functionality in the SDK itself

___

### defaultIntegrations

• `Optional` **defaultIntegrations**: false \| Integration[]

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[defaultIntegrations](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#defaultintegrations)*

*Defined in node_modules/@sentry/types/dist/options.d.ts:27*

If this is set to false, default integrations will not be added, otherwise this will internally be set to the
recommended default integrations.

___

### dist

• `Optional` **dist**: undefined \| string

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[dist](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#dist)*

*Defined in node_modules/@sentry/types/dist/options.d.ts:56*

Sets the distribution for all events

___

### dsn

• `Optional` **dsn**: undefined \| string

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[dsn](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#dsn)*

*Defined in node_modules/@sentry/types/dist/options.d.ts:22*

The Dsn used to connect to Sentry and identify the project. If omitted, the
SDK will not send any data to Sentry.

___

### enableDedupe

• `Optional` **enableDedupe**: undefined \| false \| true

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[enableDedupe](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#enablededupe)*

*Defined in src/lib/output-streams/sentry-stream-base/interfaces.ts:10*

Should add the Sentry
[Dedupe integration](https://docs.sentry.io/platforms/node/configuration/integrations/pluggable-integrations/#dedupe)?

**`default`** false

___

### enabled

• `Optional` **enabled**: undefined \| false \| true

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[enabled](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#enabled)*

*Defined in node_modules/@sentry/types/dist/options.d.ts:17*

Specifies whether this SDK should activate and send events to Sentry.
Disabling the SDK reduces all overhead from instrumentation, collecting
breadcrumbs and capturing events. Defaults to true.

___

### environment

• `Optional` **environment**: undefined \| string

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[environment](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#environment)*

*Defined in node_modules/@sentry/types/dist/options.d.ts:54*

The current environment of your application (e.g. "production").

___

### frameContextLines

• `Optional` **frameContextLines**: undefined \| number

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[frameContextLines](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#framecontextlines)*

*Defined in node_modules/@sentry/node/dist/backend.d.ts:21*

Sets the number of context lines for each frame when loading a file.

___

### httpProxy

• `Optional` **httpProxy**: undefined \| string

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[httpProxy](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#httpproxy)*

*Defined in node_modules/@sentry/node/dist/backend.d.ts:15*

Set a HTTP proxy that should be used for outbound requests.

___

### httpsProxy

• `Optional` **httpsProxy**: undefined \| string

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[httpsProxy](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#httpsproxy)*

*Defined in node_modules/@sentry/node/dist/backend.d.ts:17*

Set a HTTPS proxy that should be used for outbound requests.

___

### ignoreErrors

• `Optional` **ignoreErrors**: Array\<string \| RegExp>

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[ignoreErrors](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#ignoreerrors)*

*Defined in node_modules/@sentry/types/dist/options.d.ts:38*

A pattern for error messages which should not be sent to Sentry.
By default, all errors will be sent.

___

### integrations

• `Optional` **integrations**: Integration[] \| (integrations: Integration[]) => Integration[]

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[integrations](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#integrations)*

*Defined in node_modules/@sentry/types/dist/options.d.ts:33*

List of integrations that should be installed after SDK was initialized.
Accepts either a list of integrations or a function that receives
default integrations and returns a new, updated list.

___

### logLevel

• `Optional` **logLevel**: [LogLevel](../classes/_implementations_loggers_bunyan_logger_index_.bunyanlogger.md#loglevel)

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[logLevel](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#loglevel)*

*Defined in node_modules/@sentry/types/dist/options.d.ts:63*

Console logging verbosity for the SDK Client.

___

### maxBreadcrumbs

• `Optional` **maxBreadcrumbs**: undefined \| number

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[maxBreadcrumbs](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#maxbreadcrumbs)*

*Defined in node_modules/@sentry/types/dist/options.d.ts:61*

The maximum number of breadcrumbs sent with events. Defaults to 30.
Values over 100 will be ignored and 100 used instead.

___

### maxValueLength

• `Optional` **maxValueLength**: undefined \| number

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[maxValueLength](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#maxvaluelength)*

*Defined in node_modules/@sentry/types/dist/options.d.ts:69*

Maxium number of chars a single value can have before it will be truncated.

___

### release

• `Optional` **release**: undefined \| string

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[release](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#release)*

*Defined in node_modules/@sentry/types/dist/options.d.ts:52*

The release identifier used when uploading respective source maps. Specify
this value to allow Sentry to resolve the correct source maps when
processing events.

___

### sampleRate

• `Optional` **sampleRate**: undefined \| number

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[sampleRate](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#samplerate)*

*Defined in node_modules/@sentry/types/dist/options.d.ts:65*

A global sample rate to apply to all events (0 - 1).

___

### serverName

• `Optional` **serverName**: undefined \| string

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[serverName](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#servername)*

*Defined in node_modules/@sentry/node/dist/backend.d.ts:11*

Sets an optional server name (device name)

___

### shutdownTimeout

• `Optional` **shutdownTimeout**: undefined \| number

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[shutdownTimeout](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#shutdowntimeout)*

*Defined in node_modules/@sentry/node/dist/backend.d.ts:13*

Maximum time to wait to drain the request queue, before the process is allowed to exit.

___

### transport

• `Optional` **transport**: TransportClass\<Transport>

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[transport](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#transport)*

*Defined in node_modules/@sentry/types/dist/options.d.ts:42*

Transport object that should be used to send events to Sentry

___

### transportOptions

• `Optional` **transportOptions**: TransportOptions

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[transportOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#transportoptions)*

*Defined in node_modules/@sentry/types/dist/options.d.ts:46*

Options for the default transport that the SDK uses.

## Methods

### beforeBreadcrumb

▸ `Optional`**beforeBreadcrumb**(`breadcrumb`: Breadcrumb, `hint?`: BreadcrumbHint): Breadcrumb \| null

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[beforeBreadcrumb](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#beforebreadcrumb)*

*Defined in node_modules/@sentry/types/dist/options.d.ts:94*

A callback invoked when adding a breadcrumb, allowing to optionally modify
it before adding it to future events.

Note that you must return a valid breadcrumb from this callback. If you do
not wish to modify the breadcrumb, simply return it at the end.
Returning null will case the breadcrumb to be dropped.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`breadcrumb` | Breadcrumb | The breadcrumb as created by the SDK. |
`hint?` | BreadcrumbHint | - |

**Returns:** Breadcrumb \| null

The breadcrumb that will be added | null.

___

### beforeSend

▸ `Optional`**beforeSend**(`event`: Event, `hint?`: EventHint): PromiseLike\<Event \| null> \| Event \| null

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[beforeSend](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#beforesend)*

*Defined in node_modules/@sentry/types/dist/options.d.ts:82*

A callback invoked during event submission, allowing to optionally modify
the event before it is sent to Sentry.

Note that you must return a valid event from this callback. If you do not
wish to modify the event, simply return it at the end.
Returning null will case the event to be dropped.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`event` | Event | The error or message event generated by the SDK. |
`hint?` | EventHint | May contain additional information about the original exception. |

**Returns:** PromiseLike\<Event \| null> \| Event \| null

A new event that will be sent | null.

___

### onFatalError

▸ `Optional`**onFatalError**(`error`: [Error](_implementations_object_formats_interfaces_.errorobject.md#error)): void

*Inherited from [SentryStreamBaseOptions](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md).[onFatalError](_lib_output_streams_sentry_stream_base_interfaces_.sentrystreambaseoptions.md#onfatalerror)*

*Defined in node_modules/@sentry/node/dist/backend.d.ts:9*

Callback that is executed when a fatal global error occurs.

#### Parameters:

Name | Type |
------ | ------ |
`error` | [Error](_implementations_object_formats_interfaces_.errorobject.md#error) |

**Returns:** void
