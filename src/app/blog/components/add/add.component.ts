import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { BlogService } from 'src/app/services/blog.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit, OnDestroy {
  destroy$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private service: BlogService) {}

  ngOnDestroy(): void {
    console.log('destroyed component');
    this.destroy$.next({
      value: 2,
    }); //passed value is set to Subject

    this.destroy$.subscribe((value) => {
      console.log(value);
    });

    this.destroy$.complete();
    //complete
  }

  blogs: any;

  ngOnInit(): any {
    this.service
      .getAllBlogs()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (result: any) => {
          console.log(result);
          this.blogs = result.data;
        },
        error: (err) => {},
      });
  }

  onSubmit(data: NgForm) {
    this.service.createBlog(data.value).subscribe({
      next: (result: any) => {
        console.log(result);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
