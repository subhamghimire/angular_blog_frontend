import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  public API_URL = 'http://localhost:3000/api';

  constructor(public $http: HttpClient) {}

  createBlog(data: any) {
    return this.$http.post(`${this.API_URL}+'/blogs`, data);
  }
}
