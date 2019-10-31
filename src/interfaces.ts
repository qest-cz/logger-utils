import * as Bunyan from 'bunyan';
import { WriteStream } from 'fs';
import * as Pino from 'pino';

export interface ILogger {
    fatal: (msg: string | object | Error, ...args: any[]) => void;
    error: (msg: string | object | Error, ...args: any[]) => void;
    warn: (msg: string | object | Error, ...args: any[]) => void;
    info: (msg: string | object | Error, ...args: any[]) => void;
    debug: (msg: string | object | Error, ...args: any[]) => void;
    trace: (msg: string | object | Error, ...args: any[]) => void;
}

export enum Level {
    FATAL = 'fatal',
    ERROR = 'error',
    WARN = 'warn',
    INFO = 'info',
    DEBUG = 'debug',
    TRACE = 'trace',
}

interface ICustomLoggerStream {
    level: Level;
    stream: NodeJS.WriteStream | WriteStream;
    enabled: boolean;
}

export type IPinoLoggerOptions = {
    level: Pino.LevelWithSilent;
    outputStreams?: ICustomLoggerStream[];
    usePinoSerialized?: boolean;
} & Pino.LoggerOptions;

export type IBunyanLoggerOption = {
    level: Bunyan.LogLevel;
    outputStreams: ICustomLoggerStream[];
} & Bunyan.LoggerOptions;

export interface ISentryStreamOptions {
    environment?: string;
    release?: string;
    dsn: string;
    enableDedupe?: boolean;
}

export interface IBaseLogObject {
    level: number;
    time: string | number;
    msg?: string;
    pid?: number;
    hostname?: string;
    name?: string;
    v?: number;
    [key: string]: any;
}
export interface IWithErrorLogObject extends IBaseLogObject {
    err?: IErrorObject;
}

export interface IFlatLogObject extends IBaseLogObject {
    type?: string;
    stack?: string;
    code?: number | string;
    req?: IPseudoRequest;
    user?: Object;
    payload?: any;
}

export interface IErrorObject extends Error {
    fingerprint?: string;
    type?: string;
    code?: number | string;
    req?: IPseudoRequest;
    user?: Object;
    payload?: any;
    [key: string]: any;
}

interface IPseudoRequest {
    headers: {
        [key: string]: string | string[];
    };
    query: {
        [key: string]: string | number;
    };
    body: any;
    path: string;
    cookies?: Object;
    ip?: string;
    url: string;
    secure: boolean;
    method?: string;
}

export interface IHandlerError extends IErrorObject {
    req: IPseudoRequest;
}

export interface ISentryBreadcrumb {
    message: string;
    category?: string;
    level: number;
    data?: object;
}
