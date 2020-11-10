import { WriteStream } from 'fs';

export type MsgType = string | object | Error;

export interface Logger {
    fatal: (msg: MsgType, ...args: any[]) => void;
    error: (msg: MsgType, ...args: any[]) => void;
    warn: (msg: MsgType, ...args: any[]) => void;
    info: (msg: MsgType, ...args: any[]) => void;
    debug: (msg: MsgType, ...args: any[]) => void;
    trace: (msg: MsgType, ...args: any[]) => void;
}

export enum Level {
    FATAL = 'fatal',
    ERROR = 'error',
    WARN = 'warn',
    INFO = 'info',
    DEBUG = 'debug',
    TRACE = 'trace',
}

export interface CustomLoggerStream {
    /**
     * This depends on the logger used.
     *
     * But in most cases this sets the minimum level at which the specific stream will be invoked.
     * For example if you set this to Level.INFO you will only get INFO, WARN, ERROR and FATAL but not DEBUG or TRACE
     *
     * Refer to the used logger for more info...
     */
    level: Level;
    /**
     * Any stream implementing the required interface.
     *
     * These streams are then utilized by the selected logger.
     */
    stream: NodeJS.WriteStream | WriteStream;
    /**
     * Enable or disable this specific stream.
     */
    enabled: boolean;
}
