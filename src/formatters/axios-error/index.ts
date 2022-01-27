interface IAxiosError<T = any> extends Error {
    config: unknown;
    code?: string;
    request?: any;
    response?: {
        data: T;
        status: number;
        statusText: string;
        headers: any;
        config: unknown;
        request?: any;
    };
    isAxiosError: boolean;
}

export const formatterAxiosError = (error: IAxiosError) => {
    try {
        if (error.isAxiosError) {
            const { request, response, stack, message, ...rest } = error;
            return {
                ...rest,
                stack,
                message,
                response: response
                    ? {
                          status: response.status,
                          headers: response.headers,
                          data: response.data,
                      }
                    : null,
            };
        }
        return error;
    } catch (e) {
        return error;
    }
};
