import {ErrorException} from "../types";

export const isErrorException = (error: unknown | string): error is ErrorException => {
    return (
        typeof error !== "string" &&
        typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        'status' in error
    )
}

export const getResError = (error: unknown, resStatus?: number) => {
    let status = resStatus || 500;
    let data = {
        error
    }
    if(isErrorException(error)) {
        status = error.status;
        data.error = error.message
    }
    return {
        status,
        data
    }
}
