import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/core/service/blog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  blogs: any;
  constructor(private service: BlogService) {}

  ngOnInit(): void {
    this.service
      .getAllBlogs()
      // .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (result: any) => {
          this.blogs = result.blogs;
        },
        error: (err) => {},
      });
  }
}
