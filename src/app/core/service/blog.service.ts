import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, Subject } from 'rxjs';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  public API_URL = 'http://localhost:3000/api';

  private blogs$ = new BehaviorSubject<Blog[]>([]); //can access last data emitted

  public total!: number;
  constructor(public $http: HttpClient) {}

  public init(): void {
    this.$http
      .get<Blog[]>(`${this.API_URL}` + '/blogs')
      .pipe(map((data: any) => data.blogs))
      .subscribe((blogs: Blog[]) => {
        this.blogs$.next(blogs);
        this.total = blogs.length;
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

  getABlog(id: string) {
    return this.$http.get(`${this.API_URL}` + '/blogs/' + id);
  }

  updateBlog(data: any, id: string) {
    return this.$http.put(`${this.API_URL}` + '/blogs/' + id, data);
  }

  deleteBlog(id: string) {
    return this.$http
      .delete(`${this.API_URL}` + '/blogs/' + id)
      .subscribe(() => {
        this.init();
      });
  }
}
