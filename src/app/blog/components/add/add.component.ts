import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  constructor(public blogService: BlogService) {}

  ngOnInit(): void {}

  onSubmit(data: NgForm) {
    this.blogService.createBlog(data.value).subscribe({
      next: (result: any) => {
        console.log(result);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
