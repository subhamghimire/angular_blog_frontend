import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.fetchBlogDetail();
  }

  fetchBlogDetail() {
    const id = this.route.snapshot.params['id'];
    this.blogService.getABlog(id).subscribe((result: any) => {
      this.blog = result.blog;
    });
  }

  updateBlog(data: NgForm) {
    const id = this.route.snapshot.params['id'];
    this.blogService.updateBlog(data.value, id).subscribe({
      next: () => {
        this._router.navigate(['/blogs']);
      },
    });
  }
}
