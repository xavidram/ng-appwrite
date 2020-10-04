import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './containers/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './state/auth.state';
import { AuthHandler } from './handlers/auth.handler';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './containers/register/register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegistrationSuccessfullComponent } from './containers/registration-successfull/registration-successfull.component';


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
      }, {
        path: 'register',
        component: RegisterComponent,
        data: { title: 'Register' }
      }
    ])
  ],
  declarations: [LoginFormComponent, LoginComponent, RegisterComponent, RegisterFormComponent, RegistrationSuccessfullComponent],
  providers: [
    AuthService,
    AuthGuard
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
