import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, Subject, switchMap, take, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
import { BlogService } from 'src/app/core/service/blog.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit, OnDestroy {
  destroy$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  private _submitBlog$: Subject<void> = new Subject();
  constructor(private service: BlogService, private authService: AuthService) {}

  collaped = true;
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

  ngOnInit(): any {
    // this._submitBlog$
    //   .pipe(switchMap(() => this.service.getAllBlogs()))
    //   .subscribe((result) => {
    //     this.blogs = result;
    //   });
  }

  onSubmit(data: NgForm) {
    this.service.createBlog(data.value).subscribe({
      next: (result: any) => {
        console.log(result);
        this.service.getAllBlogs();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
