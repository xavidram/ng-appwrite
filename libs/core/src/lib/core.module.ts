import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import {
  NgxsRouterPluginModule,
  RouterStateSerializer,
} from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthModule } from '@ng-appwrite/auth';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { AppwriteInterceptor } from './interceptors/appwrite.interceptor';
import { WINDOW, _window } from './services/window.token';
import { CustomRouterStateSerializer } from './handlers/custom-router-state.serializer';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: ['auth.profile'],
    }),
    NgxsDispatchPluginModule.forRoot(),
    AuthModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppwriteInterceptor,
      multi: true,
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }, {
      provide: RouterStateSerializer,
      useClass: CustomRouterStateSerializer,
    },
    { provide: WINDOW, useFactory: _window },
  ]
})
export class CoreModule {}
