import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthError } from '../../models/auth-error';
import { IRegisterCredentials } from '../../models/login-creds';
import { Register } from '../../state/auth.actions';
import { AuthState } from '../../state/auth.state';

@Component({
  selector: 'ng-appwrite-register-form',
  template: `
    <div class="leading-normal flex flex-col p-6 bg-white rounded-lg shadow-lg">
      <div class="login-header flex flex-row my-6">
        <img src="assets/appwrite.svg" alt="Appwrite login logo" class="h-8 w-full">
      </div>
      <div class="">
        <form [formGroup]="registerForm" (ngSubmit)="register()" class="flex flex-col">
          <!-- Error Display -->
          <div class="">
            <span class="p-2 text-red-600" *ngIf="(authError | async)">{{ (authError | async)?.message }}</span>
          </div>
          <!-- Name -->
          <div class="form-control flex flex-col my-2">
            <input class="px-4 py-2 bg-gray-300" type="text" formControlName="name" placeholder="Full Name" />
            <div *ngIf="f.name.dirty && f.name.errors" class="">
              <small class="text-red-600" *ngIf="f.name.errors.required">A Name is Required!</small>
            </div>
          </div>
          <!-- Email -->
          <div class="form-control flex flex-col my-2">
            <input class="px-4 py-2 bg-gray-300" type="email" formControlName="email" placeholder="Email Address" />
            <div *ngIf="f.email.dirty && f.email.errors" class="">
              <small class="text-red-600" *ngIf="f.email.errors.required">An Email is Required!</small>
              <small class="text-red-600" *ngIf="f.email.errors.email">Please enter a Valid Email Address!</small>
            </div>
          </div>
          <!-- Password -->
          <div class="form-control flex flex-col my-2">
            <input class="px-4 py-2 bg-gray-300" type="password" formControlName="password" placeholder="Password" />
            <div *ngIf="f.password.dirty && f.password.errors" class="">
              <small class="text-red-600" *ngIf="f.password.errors.required">Password Field is Required!</small>
              <small class="text-red-600" *ngIf="f.password.errors.maxLength || f.password.errors.minLength">Password needs to be between 8 and 18 characters!</small>
              <small class="text-red-600" *ngIf="f.password.errors.pattern">Password is not Complex enough!</small>
            </div>
          </div>
          <!-- Confirm Password -->
          <div class="form-control flex flex-col my-2">
            <input class="px-4 py-2 bg-gray-300" type="password" formControlName="confirmPwd" placeholder="Confirm Password" />
            <div *ngIf="f.password.dirty && f.confirmPwd.errors" class="">
              <small class="text-red-600" *ngIf="f.confirmPwd.errors.required">Password Confirm Field is Required!</small>
              <small class="text-red-600" *ngIf="f.confirmPwd.errors.confirmedValidator">Password and Confirm Fields do not match!</small>
            </div>
          </div>
          <!-- Buttons -->
          <div class="mt-6 grid grid-cols-2 gap-4">
            <button class="bg-white text-gray-800 px-4 py-2 w-full shadow-sm hover:bg-gray-200" style="border: thin solid lightgrey;" type="submit">Cancel</button>
            <button class="bg-appwrite hover:bg-pink-700 text-white px-4 py-2 w-full shadow-sm" type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class RegisterFormComponent implements OnInit {

  @Select(AuthState.authError)
  authError: Observable<AuthError>;

  @Select(AuthState.isPending)
  isPending: Observable<boolean>;

  registerForm: FormGroup;
  submitted: boolean;

  constructor(private fb: FormBuilder, private store: Store) {
    this.registerForm = fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.minLength(4), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(18), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmPwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(18)]]
    }, {
      validator: this.confirmedValidator('password', 'confirmPwd')
    })
  }

  ngOnInit(): void {
  }

  get f() { return this.registerForm.controls; }

  register() {
    this.submitted = true;

    if(!this.registerForm.valid) {
      return;
    }

    const credentials: IRegisterCredentials = {
      email: this.f.email.value,
      name: this.f.name.value,
      password: this.f.password.value
    };

    this.store.dispatch(new Register(credentials));
  }

  confirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
}
