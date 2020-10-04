import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthError } from '../../models/auth-error';
import { ILoginCredentials } from '../../models/login-creds';
import { AuthService } from '../../services/auth.service';
import { Login } from '../../state/auth.actions';
import { AuthState } from '../../state/auth.state';

@Component({
  selector: 'ng-appwrite-login-form',
  template: `
    <div class="leading-normal flex flex-col p-6 bg-white rounded-lg shadow-lg">
      <div class="login-header flex flex-row my-6">
        <img src="assets/appwrite.svg" alt="Appwrite login logo" class="h-8 w-full">
      </div>
      <div class="">
        <form [formGroup]="lForm" (ngSubmit)="login()" class="flex flex-col">
          <div class="">
            <span class="p-2 text-red-600" *ngIf="(authError | async)">{{ (authError | async)?.message }}</span>
          </div>
          <!-- Email input -->
          <div class="form-control flex flex-col my-2">
            <input class="px-4 py-2 bg-gray-300" type="email" formControlName="email" placeholder="Email" />
            <div *ngIf="submitted && f.email.errors" class="">
              <small class="text-red-600" *ngIf="f.email.errors.required">Email is Required!</small>
            </div>
          </div>
          <!-- Password input -->
          <div class="form-control flex flex-col my-2">
            <input class="px-4 py-2 bg-gray-300" type="password" formControlName="password" placeholder="Password" />
            <div *ngIf="submitted && f.password.errors" class="">
              <small class="text-red-600" *ngIf="f.password.errors.required">Password is Required!</small>
            </div>
          </div>
          <!-- Buttons -->
          <div class="mt-2">
            <button class="bg-appwrite text-white px-4 py-2 w-full" type="submit">Login</button>
            <div class="flex justify-center items-center mt-4">
              <a class="cursor-pointer shadow-sm text-gray-700 hover:text-black" routerLink="/register">Dont have an Account?</a>
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

  @Select(AuthState.isPending)
  isPending: Observable<boolean>;

  lForm: FormGroup;
  submitted: boolean;

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.lForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }

  get f() { return this.lForm.controls; }

  login() {
    this.submitted = true;
    if(!this.lForm.valid) {
      return;
    }
    
    const credentials: ILoginCredentials = {
      email: this.f.email.value,
      password: this.f.password.value
    }

    this.store.dispatch(new Login(credentials));
  }

}
