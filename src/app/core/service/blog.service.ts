import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  public API_URL = 'http://localhost:3000/api';

  private blogs$ = new BehaviorSubject<Blog[]>([]); //can access last data emitted

  constructor(public $http: HttpClient) {}

  public init(): void {
    this.$http
      .get<Blog[]>(`${this.API_URL}` + '/blogs')
      .subscribe((result: any) => {
        this.blogs$.next(result.blogs);
      });
  }

  getAllBlogs(): Observable<Blog[]> {
    return this.blogs$;
  }

  createBlog(data: any) {
    return this.$http.post(`${this.API_URL}` + '/blogs', data).subscribe(() => {
      this.init();
    });
  }
}
