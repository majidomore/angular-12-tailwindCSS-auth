import { Injectable } from '@angular/core';
import { TOKEN_KEY, USER_KEY } from '@app/helpers/interfaces';
import { User } from '@app/helpers/models';
import { ApiService } from './api.service';
import { LoginForm } from '../helpers/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private user?: User;

  constructor(private api: ApiService) {
    if (!this.user) {
      let loadUser = window.sessionStorage.getItem(USER_KEY);
      if (loadUser) {
        this.user = JSON.parse(loadUser);
      }
    }
  }
  public isLoggedIn(): boolean {
    let token = window.sessionStorage.getItem(TOKEN_KEY);
    if (token) return true;
    return false;
  }
  public doLogin(login: LoginForm) {
    this.api.login(login).subscribe((data: User) => {
      this.user = data;
      window.sessionStorage.setItem(TOKEN_KEY, this.user.token);
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(this.user));
      window.location.href = '/';
    });
  }

  public doLogout() {
    this.user = undefined;
    window.sessionStorage.clear();
    window.location.href = '/';
  }

  public getUser(): User | undefined {
    return this.user;
  }

  public getToken(): string {
    if (this.user) {
      return this.user.token;
    }
    return '';
  }
}
