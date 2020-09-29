import { IAppwriteAccount } from '../models/IAppwriteAccount.model';
import { AppwriteService } from './appwrite.service';

export class AppwriteAccount extends AppwriteService implements IAppwriteAccount {
    
    async create(email: string, password: string, name: string): Promise<any> {}
    async createSession(email: string, password: string): Promise<any> {}
    async createOAuth2Session(provider: string, success?: string, failure?: string): Promise<any> {}
    async get(): Promise<any> {}
    async getPrefs(): Promise<any> {}
    async getSessions(): Promise<any> {}
    async getLogs(): Promise<any> {}
    async updateName(name: string): Promise<any> {}
    async updatePassword(password: string, oldPassword: string): Promise<any> {}
    async updateEmail(email: string, password: string): Promise<any> {}
    async updatePrefs(prefs: any): Promise<any> {}
    async delete(): Promise<any> {}
    async deleteSession(sessionId: string): Promise<any> {}
    async deleteSessions(): Promise<any> {}
    async createRecovery(email: string, url: string): Promise<any> {}
    async updateRecovery(userId: string, secret: string, password: string, passwordAgain: string): Promise<any> {}
    async createVerification(url: string): Promise<any> {}
    async updateVerification(userId: string, secret: string): Promise<any> {}
}