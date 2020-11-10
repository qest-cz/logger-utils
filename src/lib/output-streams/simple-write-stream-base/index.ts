// tslint:disable: function-name
import {
    AddressInfo,
    IpcSocketConnectOpts,
    SocketConnectOpts,
    TcpSocketConnectOpts,
} from 'net';

/**
 * As I understand it, this is just a helper class, that sets some useful defaults for further stream implementations.
 *
 * TODO: Add some examples how to implement this properly...
 * TODO: Original author should document this, why are some methods empty and etc...
 */
export abstract class SimpleWriteStreamBase implements NodeJS.WriteStream {
    // Writeable stream inherited properties
    writableEnded!: boolean;
    writableCorked!: number;
    readableEncoding!:
        | 'ascii'
        | 'utf8'
        | 'utf-8'
        | 'utf16le'
        | 'ucs2'
        | 'ucs-2'
        | 'base64'
        | 'latin1'
        | 'binary'
        | 'hex'
        | null;
    readableEnded!: boolean;
    readableFlowing!: boolean | null;
    writableHighWaterMark!: number;
    writableLength!: number;
    readable!: boolean;
    writable!: boolean;
    columns!: number;
    isTTY!: true;
    rows!: number;
    readonly bufferSize!: number;
    readonly bytesRead!: number;
    readonly bytesWritten!: number;
    readonly connecting!: boolean;
    readonly destroyed!: boolean;
    readonly localAddress!: string;
    readonly localPort!: number;
    readonly readableHighWaterMark!: number;
    readonly readableLength!: number;
    readonly readableObjectMode!: boolean;
    readonly remoteAddress!: string;
    readonly remoteFamily!: string;
    readonly remotePort!: number;
    readonly writableFinished!: boolean;
    readonly writableObjectMode!: boolean;

    private static readonly NOT_IMPLEMENTED_MESSAGE = `BasicWriteStream: Method not implemented`;

    write(str: any, encoding?: any, cb?: any): boolean {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }

    _write(chunk: any, encoding: string, callback: Function): void {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    _destroy(err: Error, callback: Function): void {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    _final(callback: Function): void {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    setDefaultEncoding(encoding: string): this {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    cork(): void {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    uncork(): void {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    destroy(error?: Error): void {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    read(size?: number): string | Buffer {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    setEncoding(encoding: string | undefined): this {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    pause(): this {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    resume(): this {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    isPaused(): boolean {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    pipe<T extends NodeJS.WritableStream>(
        destination: T,
        options?: { end?: boolean },
    ): T {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    unpipe(destination?: NodeJS.WritableStream): this {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    unshift(chunk: string): void;
    unshift(chunk: Buffer): void;
    unshift(chunk: any) {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    wrap(oldStream: NodeJS.ReadableStream): this {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    [Symbol.asyncIterator](): AsyncIterableIterator<string | Buffer> {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    addListener(
        event: string | symbol,
        listener: (...args: any[]) => void,
    ): this {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    on(event: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    once(event: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    removeListener(
        event: string | symbol,
        listener: (...args: any[]) => void,
    ): this {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    off(event: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    removeAllListeners(event?: string | symbol): this {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    setMaxListeners(n: number): this {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    getMaxListeners(): number {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    listeners(event: string | symbol): Function[] {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    rawListeners(event: string | symbol): Function[] {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    emit(event: string | symbol, ...args: any[]): boolean {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    listenerCount(type: string | symbol): number {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    prependListener(
        event: string | symbol,
        listener: (...args: any[]) => void,
    ): this {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    prependOnceListener(
        event: string | symbol,
        listener: (...args: any[]) => void,
    ): this {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }
    eventNames(): (string | symbol)[] {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }

    end(cb?: Function): void;
    end(buffer: Buffer, cb?: Function): void;
    end(str: string, cb?: Function): void;
    end(str: string, encoding?: string, cb?: Function): void;
    end(str?: any, encoding?: any, cb?: any) {
        throw new Error(SimpleWriteStreamBase.NOT_IMPLEMENTED_MESSAGE);
    }

    _read(size: number): void {
        // Nothing to do
    }

    _writev(
        chunks: { chunk: any; encoding: string }[],
        callback: (error?: Error | null) => void,
    ): void {
        // Nothing to do
    }

    address(): AddressInfo | string {
        return '';
    }

    clearLine(dir: -1 | 0 | 1, callback?: () => void): boolean {
        return false;
    }

    clearScreenDown(callback?: () => void): boolean {
        return false;
    }

    connect(
        options: TcpSocketConnectOpts | IpcSocketConnectOpts,
        connectionListener?: () => void,
    ): this;
    connect(port: number, host: string, connectionListener?: () => void): this;
    connect(port: number, connectionListener?: () => void): this;
    connect(path: string, connectionListener?: () => void): this;
    connect(
        options: SocketConnectOpts | number | string,
        connectionListener?: (() => void) | string,
        cn?: () => void,
    ): this {
        return this;
    }

    cursorTo(x: number, y?: number, callback?: () => void): boolean;
    cursorTo(x: number, callback: () => void): boolean;
    cursorTo(
        x: number,
        y?: number | (() => void),
        callback?: () => void,
    ): boolean {
        return false;
    }

    getColorDepth(env?: {}): number {
        return 0;
    }

    getWindowSize(): [number, number] {
        return [0, 0];
    }

    hasColors(depth?: number): boolean;
    hasColors(env?: {}): boolean;
    hasColors(depth: number, env?: {}): boolean;
    hasColors(depth?: number | {}, env?: {}): boolean {
        return false;
    }

    moveCursor(dx: number, dy: number, callback?: () => void): boolean {
        return false;
    }

    push(chunk: any, encoding?: string): boolean {
        return false;
    }

    ref(): this {
        return this;
    }

    setKeepAlive(enable?: boolean, initialDelay?: number): this {
        return this;
    }

    setNoDelay(noDelay?: boolean): this {
        return this;
    }

    setTimeout(timeout: number, callback?: () => void): this {
        return this;
    }

    unref(): this {
        return this;
    }
}
