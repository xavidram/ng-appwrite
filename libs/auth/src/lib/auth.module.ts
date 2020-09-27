import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {} from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './containers/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  declarations: [LoginFormComponent, LoginComponent],
})
export class AuthModule {}
