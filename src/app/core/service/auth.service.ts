import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';

interface LoginResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public API_URL = 'http://localhost:3000/api';
  public _accessTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  public _accessToken$ = this._accessTokenSubject.asObservable();

  constructor(public $http: HttpClient, private router: Router) {}

  signUp(data: any) {
    return this.$http.post(`${this.API_URL}` + '/auth/register', data);
  }

  login(data: any) {
    return this.$http
      .post<LoginResponse>(`${this.API_URL}` + '/auth/login', data)
      .pipe(
        map((response: any) => {
          if (response.access_token) {
            localStorage.setItem('access_token', response.access_token);
            this._accessTokenSubject.next(response.access_token);
            return true;
          }
          return false;
        })
      );
  }
  logout() {
    this._accessTokenSubject.next(null);
    localStorage.removeItem('access_token');
    this.router.navigate(['/']);
  }
}
