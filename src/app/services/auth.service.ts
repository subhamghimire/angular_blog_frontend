import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public API_URL = 'http://localhost:3000/api';

  constructor(public $http: HttpClient) {}

  signUp(data: any) {
    return this.$http.post(`${this.API_URL}` + '/auth/register', data);
  }
  login(data: any) {
    return this.$http.post(`${this.API_URL}` + '/auth/login', data);
  }
}
