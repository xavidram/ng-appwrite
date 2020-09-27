import { Injectable } from '@angular/core';
import * as Appwrite from 'appwrite';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AppwriteService {

  public sdk: Appwrite;

  constructor() {
    this.sdk.setEndpoint(environment.appwriteEndpoint).setProject(environment.appwriteProjectID);
  }

  get account() {
    return this.sdk.account;
  }

  get avatars() {
    return this.sdk.avatars;
  }

  get database() {
    return this.sdk.database;
  }

  get locale() {
    return this.sdk.locale;
  }

  get storage() {
    return this.sdk.storage;
  }

  get teams() {
    return this.sdk.teams;
  }
}
