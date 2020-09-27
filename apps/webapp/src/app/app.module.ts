import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from '@ng-appwrite/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
/** Circular Dependency due to import of @environmetn variable in appwrite service in shared */
import { AuthGuard } from '@ng-appwrite/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
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
})
export class AppModule {}
