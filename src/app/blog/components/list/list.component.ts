import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/core/models/blog.model';
import { BlogService } from 'src/app/core/service/blog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  public blogs!: Observable<Blog[]>;
  constructor(private service: BlogService) {}
  ngOnDestroy(): void {
    console.log('destroy component and unsubscribe / prevent memory leaks');
    //
    //
  }

  ngOnInit(): void {
    this.blogs = this.service.getAllBlogs();
    // this.service.getAllBlogs().subscribe((result) => {
    //   this.blogs = result;
    // });

    this.service.init();
  }

  totalBlogsCount() {
    return this.service.total;
  }

  deleteBlog(id: string) {
    this.service.deleteBlog(id);
  }
}
