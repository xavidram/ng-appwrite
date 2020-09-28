import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-appwrite-login',
  template: `
    <div class="flex flex-col h-full w-full justify-center items-center">
      <div class="login-form-container">
        <ng-appwrite-login-form></ng-appwrite-login-form>
      </div>
    </div>
  `,
  styles: [`
    :host {
      flex: 1;
    }
    .login-form-container {
      max-width: 400px;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
