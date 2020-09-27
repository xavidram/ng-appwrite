import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { LoginFailed } from '@ng-appwrite/auth';
import { AuthError } from '@ng-appwrite/auth';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private store: Store) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(this.handleError));
  }

  public handleError = (errorRes: HttpErrorResponse) => {
    if (errorRes.status === 401) {
      this.store.dispatch(new LoginFailed(new AuthError(errorRes.error, errorRes.status)));
    }
    // tslint:disable-next-line: max-line-length
    // console.error(`Backend Error ! status: ${errorRes.status}, error: ${errorRes.error}, message: ${errorRes.message}`);
    return throwError(errorRes);
  }

}