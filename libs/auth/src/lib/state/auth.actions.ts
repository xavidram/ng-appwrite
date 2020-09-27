import { ILoginCredentials } from '../models/login-creds';

export class Login {
    static readonly type = '[Auth] Login';
    constructor(public credentials: ILoginCredentials) {}
}

export class Logout {
    static readonly type = '[Auth] Logout';
}

export class LoginSuccess {
    static readonly type = '[Auth] Login Success';
    constructor(public payload: any) {}
}

export class LogoutSuccess {
    static readonly type = '[Auth] Logout Success';
}

export class LoginFailed {
    static readonly type = '[Auth] Login Failed';
    constructor(public error: any) {}
}

export class LoginCanceled {
    static readonly type = '[Auth] Login Canceled';
}

export class LoginRedirect {
    static readonly type = '[Auth] Login Redirect';
}