import { Injectable } from '@angular/core';
import * as Appwrite from 'appwrite';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AppwriteService {

  public sdk: Appwrite;

  constructor() {
    this.sdk.setEndpoint(environment.appwriteEndpoint).setProject(environment.appwriteProjectID);
  }

}
