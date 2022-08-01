import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public API_URL = 'http://localhost:3000/api';
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(public $http: HttpClient) {}

  signUp(data: any) {
    return this.$http.post(`${this.API_URL}` + '/auth/register', data);
  }

  login(data: any) {
    return this.$http.post(`${this.API_URL}` + '/auth/login', data).pipe(
      map((response: any) => {
        if (response.access_token) {
          localStorage.setItem(
            'access_token',
            JSON.stringify(response.access_token)
          );
          this.currentUserSubject.next(response.access_token);
        }
        return response.access_token;
      })
    );
  }
}
