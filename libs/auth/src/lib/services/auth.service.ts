import { Injectable } from '@angular/core';
import { AuthError } from '../models/auth-error';
import { ILoginCredentials, IRegisterCredentials } from '../models/login-creds';
import { AppwriteService } from '@ng-appwrite/shared'

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private appwrite: AppwriteService) {}

  async fetchUser() {
      try {
        return await this.appwrite.client.account.get();
      } catch (e) {
        return null;
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

  async register(credentials: IRegisterCredentials) {
    try {
      const response = await this.appwrite.client.account.create(credentials.email, credentials.name, credentials.password);
      console.log(response);
      if(response) {
        return response;
      }
      return null;
    } catch (e) {
      throw new AuthError(e.message, 400);
    }
  }

  async sendVerificationEmail() {
    
  }
}
