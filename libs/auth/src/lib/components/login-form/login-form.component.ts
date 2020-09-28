import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthError } from '../../models/auth-error';
import { AuthState } from '../../state/auth.state';

@Component({
  selector: 'ng-appwrite-login-form',
  template: `
    <div class="leading-normal flex flex-col p-6 bg-white rounded-lg">
      <div class="login-header flex flex-row">
        <img src="assets/appwrite.svg" alt="Appwrite login logo" class="h-8 w-full">
      </div>
      <div class="">
        <form [formGroup]="lForm" (ngSubmit)="login()" class="flex flex-col">
          <!-- Email input -->
          <div class="form-control flex flex-col">
            <label>Email</label>
            <input class="px-4 py-2 bg-gray-300" type="email" formControlName="email" />
            <div *ngIf="submitted && f.email.errors" class="">
              <div *ngIf="f.email.errors.required">Email is Required!</div>
            </div>
          </div>
          <!-- Password input -->
          <div class="form-control flex flex-col">
            <label>Password</label>
            <input class="" type="password" formControlName="password" />
            <div *ngIf="submitted && f.password.errors" class="">
              <div *ngIf="f.email.errors.required">Password is Required!</div>
              <div *ngIf="f.email.errors.minLength">Password is not Complex enough!</div>
            </div>
          </div>
          <!-- Buttons -->
          <div class="">
            <button>Login</button>
            <div class="flex justify-center items-center">
              <a>Dont have an Account?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [``]
})
export class LoginFormComponent implements OnInit {

  @Select(AuthState.authError)
  authError: Observable<AuthError>;

  lForm: FormGroup;
  submitted: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.lForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }

  get f() { return this.lForm.controls; }

  login() {}

}
