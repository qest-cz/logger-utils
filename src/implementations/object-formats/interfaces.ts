
/**
 * Standardized error log object format
 * 
 * See {@link BaseLogObject} for more info
 */
export interface WithErrorLogObject extends BaseLogObject {
    err?: ErrorObject;
}

/**
 * Standardized log object format
 * 
 * See {@link BaseLogObject} for more info
 */
export interface FlatLogObject extends BaseLogObject {
    type?: string;
    stack?: string;
    code?: number | string;
    req?: PseudoRequest;
    user?: Object;
    payload?: any;
}

/**
 * Standardized log object format.
 * This is what we are using internally **!!in our implementations!!** to represent the logged information.
 * And also our internal log and error streams will look for information defined in this type and will try to use it.
 * 
 * If you send a object that extends the BaseLogObject to he logger `logger.info(extendsBaseLogObject)` 
 * we will extract all the properties and use as much of the information provided.
 */
export interface BaseLogObject {
    level: number;
    time: string | number;
    msg?: string;
    pid?: number;
    hostname?: string;
    name?: string;
    v?: number;
    [key: string]: any;
}

export interface ErrorObject extends Error {
    fingerprint?: string;
    type?: string;
    code?: number | string;
    req?: PseudoRequest;
    user?: Object;
    payload?: any;
    [key: string]: any;
}

export interface HandlerError extends ErrorObject {
    req: PseudoRequest;
}

interface PseudoRequest {
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
