export class ApiError extends Error {
    name = 'Controller error';
    status: number;
    message: string;
    code?: number

    constructor(msg: string, status: number, code?: number) {
        super(msg);
        this.message = msg;
        this.status = status;
        this.code = code;
        Error.captureStackTrace(this, this.constructor);
    }

    static badRequest(message: string) {
        return new ApiError(message, 400)
    }

    static notFound(messege: string) {
        return new ApiError(messege, 404)
    }

    static internalError(message: string) {
        return new ApiError(message, 500)
    }

    static forbidden(message: string) {
        return new ApiError(message, 403)
    }

}