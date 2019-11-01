// tslint:disable
import { AddressInfo, IpcSocketConnectOpts, SocketConnectOpts, TcpSocketConnectOpts } from 'net';

export abstract class BasicWriteStream implements NodeJS.WriteStream {
    writableHighWaterMark: number;
    writableLength: number;
    readable: boolean;
    writable: boolean;

    write(str: any, encoding?: any, cb?: any): boolean {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    _write(chunk: any, encoding: string, callback: Function): void {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    _destroy(err: Error, callback: Function): void {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    _final(callback: Function): void {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    setDefaultEncoding(encoding: string): this {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    cork(): void {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    uncork(): void {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    destroy(error?: Error): void {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    read(size?: number): string | Buffer {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    setEncoding(encoding: string): this {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    pause(): this {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    resume(): this {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    isPaused(): boolean {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean }): T {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    unpipe(destination?: NodeJS.WritableStream): this {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    unshift(chunk: string): void;
    unshift(chunk: Buffer): void;
    unshift(chunk: any) {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    wrap(oldStream: NodeJS.ReadableStream): this {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    [Symbol.asyncIterator](): AsyncIterableIterator<string | Buffer> {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    addListener(event: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    on(event: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    once(event: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    off(event: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    removeAllListeners(event?: string | symbol): this {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    setMaxListeners(n: number): this {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    getMaxListeners(): number {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    listeners(event: string | symbol): Function[] {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    rawListeners(event: string | symbol): Function[] {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    emit(event: string | symbol, ...args: any[]): boolean {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    listenerCount(type: string | symbol): number {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error('BasicWriteStream: Method not implemented.');
    }
    eventNames(): (string | symbol)[] {
        throw new Error('BasicWriteStream: Method not implemented.');
    }

    end(cb?: Function): void;
    end(buffer: Buffer, cb?: Function): void;
    end(str: string, cb?: Function): void;
    end(str: string, encoding?: string, cb?: Function): void;
    end(str?: any, encoding?: any, cb?: any) {
        throw new Error('BasicWriteStream: Method not implemented.');
    }

    readonly bufferSize: number;
    readonly bytesRead: number;
    readonly bytesWritten: number;
    readonly connecting: boolean;
    readonly destroyed: boolean;
    readonly localAddress: string;
    readonly localPort: number;
    readonly readableHighWaterMark: number;
    readonly readableLength: number;
    readonly readableObjectMode: boolean;
    readonly remoteAddress: string;
    readonly remoteFamily: string;
    readonly remotePort: number;
    readonly writableFinished: boolean;
    readonly writableObjectMode: boolean;

    _read(size: number): void {}

    _writev(chunks: Array<{ chunk: any; encoding: string }>, callback: (error?: Error | null) => void): void {}

    address(): AddressInfo | string {
        return undefined;
    }

    clearLine(dir: -1 | 0 | 1, callback?: () => void): boolean {
        return false;
    }

    clearScreenDown(callback?: () => void): boolean {
        return false;
    }

    connect(options: TcpSocketConnectOpts | IpcSocketConnectOpts, connectionListener?: () => void): this;
    connect(port: number, host: string, connectionListener?: () => void): this;
    connect(port: number, connectionListener?: () => void): this;
    connect(path: string, connectionListener?: () => void): this;
    connect(options: SocketConnectOpts | number | string, connectionListener?: (() => void) | string, cn?: () => void): this {
        return undefined;
    }

    cursorTo(x: number, y?: number, callback?: () => void): boolean;
    cursorTo(x: number, callback: () => void): boolean;
    cursorTo(x: number, y?: number | (() => void), callback?: () => void): boolean {
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

    ref(): void {}

    setKeepAlive(enable?: boolean, initialDelay?: number): this {
        return undefined;
    }

    setNoDelay(noDelay?: boolean): this {
        return undefined;
    }

    setTimeout(timeout: number, callback?: () => void): this {
        return undefined;
    }

    unref(): void {}

    columns: number;
    isTTY: true;
    rows: number;
    // tslint:enable
}
