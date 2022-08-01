import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit(credentials: any) {
    console.log(credentials);
  }
}
