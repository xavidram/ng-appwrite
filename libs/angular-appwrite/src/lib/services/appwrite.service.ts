import { Injectable } from '@angular/core';
import { AppwriteHeaders } from '../models/AppwriteHeaders.enum';
import { IAppwrite } from '../models/IAppwrite.model';

@Injectable()
export class AppwriteService implements IAppwrite {
  private headers: {};
  private endpoint: string;

  constructor() {}

  setEndpoint(endpoint: string): this {
    this.endpoint = endpoint;
    return this;
  }

  setProject(projectId: string): this {
    this.headers[
      AppwriteHeaders.XAppwriteProject.toLowerCase()
    ] = projectId.toLowerCase();
    return this;
  }

  setLocale(locale: string): this {
    this.headers[
      AppwriteHeaders.XAppwriteLocale.toLowerCase()
    ] = locale.toLowerCase();
    return this;
  }

  setKey(key: string): this {
    this.headers[
      AppwriteHeaders.XAppwriteKey.toLowerCase()
    ] = key.toLowerCase();
    return this;
  }

  setMode(mode: string): this {
    this.headers[
      AppwriteHeaders.XAppwriteMode.toLowerCase()
    ] = mode.toLowerCase();
    return this;
  }
}
