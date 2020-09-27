import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';


@Injectable()
export class AppwriteInterceptor implements HttpInterceptor {

  private excludedUrls: string[] = [];

  constructor(private store: Store) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const url = req.url.toLowerCase();

    /** Look for the patterns of excluded URLS that do not need SessionID header and handle request */
    const found = !!this.excludedUrls.find(u => url.startsWith(u));
    if(found) {
      return next.handle(req);
    }

    /** Otherwise attatch SessionID to request */
    /** Add headers if needed here */
    /*
    req = req.clone({
      setHeaders: {}
    });
    */

    return next.handle(req);
  }

}