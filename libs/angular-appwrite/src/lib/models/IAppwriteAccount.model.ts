export interface IAppwriteAccount {
    /** TODO: set type returns */
    create(email: string, password: string, name: string): Promise<any>;
    createSession(email: string, password: string): Promise<any>;
    createOAuth2Session(provider: string, success?: string, failure?: string): Promise<any>;
    get(): Promise<any>;
    getPrefs(): Promise<any>;
    getSessions(): Promise<any>;
    getLogs(): Promise<any>;
    updateName(name: string): Promise<any>;
    updatePassword(password: string, oldPassword: string): Promise<any>;
    updateEmail(email: string, password: string): Promise<any>;
    updatePrefs(prefs: any): Promise<any>;
    delete(): Promise<any>;
    deleteSession(sessionId: string): Promise<any>;
    deleteSessions(): Promise<any>;
    createRecovery(email: string, url: string): Promise<any>;
    updateRecovery(userId: string, secret: string, password: string, passwordAgain: string): Promise<any>;
    createVerification(url: string): Promise<any>;
    updateVerification(userId: string, secret: string): Promise<any>;
}