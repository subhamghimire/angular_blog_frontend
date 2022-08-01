import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private fb: FormBuilder, private authService: AuthService) {}
  signUpForm!: FormGroup;

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.authService.signUp(this.signUpForm.value).subscribe({
        next: (result: any) => {
          console.log(result);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  get signUpFormControl() {
    return this.signUpForm.controls;
  }
}
