import { Injectable } from '@angular/core';
import { AppwriteClient } from './client';

@Injectable({
  providedIn: 'root'
})
export class AppwriteService {
  client: AppwriteClient;

  /**
   * @param client
   */
  constructor(client: AppwriteClient) {
    this.client = client;
  }
}
