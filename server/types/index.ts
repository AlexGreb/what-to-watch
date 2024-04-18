export type Port = number;

type ResponseStatus = 'OK' | 'FAILED';

export type HttpError = {
    error: string;
}

type Message = string;

export type ErrorException = {
    status: number;
    message: Message
};

export type ResponseData<T> = {
    status: ResponseStatus;
    data: T | HttpError
}

export type ConnectionStringBD = string;



