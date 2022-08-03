import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Blog } from 'src/app/core/models/blog.model';
import { BlogService } from 'src/app/core/service/blog.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  blog!: Blog;
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchBlogDetail();
  }

  fetchBlogDetail() {
    let id = this.route.snapshot.params['id'];
    this.blogService.getABlog(id).subscribe((result: any) => {
      this.blog = result.blog;
    });
  }
}
