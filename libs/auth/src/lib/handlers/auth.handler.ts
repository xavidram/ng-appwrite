import { Injectable } from '@angular/core';
import { Actions, ofActionCompleted, ofActionDispatched, ofActionErrored, ofActionSuccessful } from '@ngxs/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { Login, LoginCanceled, LoginFailed, LoginSuccess } from '../state/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthHandler {
  constructor(private actions$: Actions, private spinner: NgxSpinnerService) {
    // Show Spinner on login
    this.actions$.pipe(ofActionDispatched(Login)).subscribe(() => {
      this.spinner.show();
    });
    // Hide spinnter
    this.actions$.pipe(ofActionCompleted(LoginSuccess, LoginCanceled, LoginFailed)).subscribe(() => {
      setTimeout(() => {
        this.spinner.hide();
      }, 500);
    })
  }
}