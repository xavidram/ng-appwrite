import { BrowserModule, } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoreModule } from '@ng-appwrite/core';

import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
/** Circular Dependency due to import of @environmetn variable in appwrite service in shared */
import { AuthGuard } from '@ng-appwrite/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('@ng-appwrite/home').then((module) => module.HomeModule),
      }, {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('@ng-appwrite/dashboard').then(module => module.DashboardModule)
      }, {
        path: '404',
        loadChildren: () => import('@ng-appwrite/not-found').then(module => module.NotFoundModule)
      }, 
      { path: '**', redirectTo: '404', pathMatch: 'full' }
    ]),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
