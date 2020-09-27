
export class AuthError extends Error {
    errorCode: number;

    constructor(message: string, code: number) {
        super(message);
        this.errorCode = code;
    }
}