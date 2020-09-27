import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

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
        loadChildren: () => import('@ng-appwrite/dashboard').then(module => module.DashboardModule)
      }, {
        path: '404',
        loadChildren: () => import('@ng-appwrite/not-found').then(module => module.NotFoundModule)
      }, 
      { path: '**', redirectTo: '404', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
