import { Injectable } from '@angular/core';
import {
  Actions,
  ofActionCompleted,
  ofActionDispatched,
  ofActionErrored,
  ofActionSuccessful,
} from '@ngxs/store';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  Login,
  LoginCanceled,
  LoginFailed,
  LoginSuccess,
  Register,
  RegisterCanceled,
  RegisterFailed,
  RegisterSuccess,
} from '../state/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthHandler {
  constructor(private actions$: Actions, private spinner: NgxSpinnerService) {
    // Show Spinner on login
    this.actions$.pipe(ofActionDispatched(Login, Register)).subscribe(() => {
      this.spinner.show();
    });
    // Hide spinner
    this.actions$
      .pipe(
        ofActionCompleted(
          LoginSuccess,
          LoginCanceled,
          LoginFailed,
          RegisterCanceled,
          RegisterSuccess,
          RegisterFailed
        )
      )
      .subscribe(() => {
        setTimeout(() => {
          this.spinner.hide();
        }, 500);
      });
  }
}
