import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { State, Selector, Action, StateContext, NgxsAfterBootstrap } from '@ngxs/store';
import { AuthError } from '../models/auth-error';
import { IAuthStateModel } from '../models/state-model';
import { AuthService } from '../services/auth.service';
import { Login, LoginCanceled, LoginFailed, LoginRedirect, LoginSuccess, Logout, LogoutSuccess } from './auth.actions';

import { NgxSpinnerService } from "ngx-spinner";

@State<IAuthStateModel>({
    name: 'auth',
    defaults: {
        pending: false,
        profile: null,
        error: null
    }
})
@Injectable({
  providedIn: 'root'
})
export class AuthState implements NgxsAfterBootstrap {

    constructor(
      private router: Router,
      private zone: NgZone,
      private auth: AuthService,
      private spiner: NgxSpinnerService
    ) {}

    @Selector()
    static profile(state: IAuthStateModel) {
        return state.profile;
    }

    @Selector()
    static isPending(state: IAuthStateModel) {
        return state.pending;
    }

    @Selector()
    static authError(state: IAuthStateModel) {
        return state.error;
    }

    @Selector()
    static isLoggedIn(state: IAuthStateModel) {
        return !!state.profile;
    }

    async ngxsAfterBootstrap(ctx: StateContext<IAuthStateModel>) {
      try {
        const user = await this.auth.fetchUser();
        if(user) {
          ctx.dispatch(new LoginSuccess(user));
        } else {
          ctx.dispatch(new LoginFailed('Session Expired!'));
        }
      } catch (e) {
        if (e instanceof AuthError) {
          console.log(e);
        }
      }
    }

    
  @Action(LoginSuccess)
  onLoginSuccess(
    { getState, patchState }: StateContext<IAuthStateModel>,
    { payload }: LoginSuccess
  ) {
    patchState({
      profile: payload,
      error: null,
      pending: false
    });
    this.zone.run(() => this.router.navigate(['/dashboard']));
  }

  @Action([LogoutSuccess, LoginCanceled])
  onLogoutSuccess({ patchState }: StateContext<IAuthStateModel>) {
    patchState({
      profile: null,
      error: null,
      pending: false
    });
    this.zone.run(() => this.router.navigate(['/login']));
  }

  @Action(LoginFailed)
  onLoginFailed(
    { patchState }: StateContext<IAuthStateModel>,
    { error }: LoginFailed
  ) {
    patchState({
      profile: null,
      error,
      pending: false
    });
    this.zone.run(() => this.router.navigate(['/login']));
  }

  @Action(Logout)
  async logout(ctx: StateContext<IAuthStateModel>) {
    await this.auth.logout();
    ctx.dispatch(new LogoutSuccess());
  }

  @Action(LoginRedirect)
  loginRedirect(ctx: StateContext<IAuthStateModel>) {
    this.zone.run(() => this.router.navigate(['/login']));
  }

  @Action(Login)
  login(ctx: StateContext<IAuthStateModel>, { credentials }: Login) {
    ctx.patchState({ error: undefined, pending: true });
    return this.zone.run(() => {
      this.auth.login(credentials).then((profile:any) => {
        ctx.dispatch(new LoginSuccess(profile));
      }).catch((error: AuthError) => ctx.dispatch(new LoginFailed(error)))
    });
  }
}