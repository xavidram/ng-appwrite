import { Injectable } from '@angular/core';
import { AuthError } from '../models/auth-error';
import { ILoginCredentials } from '../models/login-creds';
import { AppwriteService } from '@ng-appwrite/shared'

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private appwrite: AppwriteService) {}

  async fetchUser() {
      try {
        return await this.appwrite.client.account.get();
      } catch (e) {
          throw new AuthError(e.message, 401);
      }
  }

  async login(credentials: ILoginCredentials) {
      try {
        const newSession = await this.appwrite.client.account.createSession(credentials.email, credentials.password);
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
        const session = await this.appwrite.client.account.get();
        await this.appwrite.client.account.deleteSession(session.$id);
        */
      } catch (e) {

      }
  }
}
