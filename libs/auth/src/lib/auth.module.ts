import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './containers/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './state/auth.state';
import { AuthHandler } from './handlers/auth.handler';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxsModule.forFeature([AuthState]),
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login' }
      }
    ])
  ],
  declarations: [LoginFormComponent, LoginComponent],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: []
    }
  }

  constructor(authHandler: AuthHandler) {}
}
