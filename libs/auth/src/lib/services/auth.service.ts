import { Injectable } from '@angular/core';
import { AppwriteService } from '@ng-appwrite/shared';
import { AuthError } from '../models/auth-error';
import { ILoginCredentials } from '../models/login-creds';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private appwrite: AppwriteService) {}

  async fetchUser() {
      try {
        return await this.appwrite.account.get();
      } catch (e) {
          throw new AuthError(e.message, 401);
      }
  }

  async login(credentials: ILoginCredentials) {
      try {
        debugger;
        const newSession = await this.appwrite.account.createSession(credentials.email, credentials.password);
        console.log(newSession);
        if(newSession) {
            return await this.fetchUser();
        } else {
            throw new AuthError(`An error occured loggin in`, 400);
        }
      } catch (e) {
        throw new AuthError(e.message, 401);
      }
  }

  async logout() {
      try {
          /*
        const session = await this.appwrite.account.get();
        await this.appwrite.account.deleteSession(session.sessionId);
        */
      } catch (e) {

      }
  }
}
