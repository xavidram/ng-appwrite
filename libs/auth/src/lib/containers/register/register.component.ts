import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from '../../state/auth.state';

@Component({
  selector: 'ng-appwrite-register',
  template: `
    <div class="flex flex-col h-full w-full justify-center items-center">
      <h1 class="mb-6 font-bold text-3xl text-gray-700">Register</h1>
      <div class="register-form-container">
        <ng-appwrite-register-form></ng-appwrite-register-form>
      </div>
    </div>
  `,
  styles: [`
    :host {
      flex: 1;
    }
    .register-form-container {
      max-width: 600px;
    }
  `]
})
export class RegisterComponent implements OnInit {

  @Select(AuthState.isPending)
  pending: Observable<boolean>;

  constructor() { }

  ngOnInit(): void {
  }

}
