import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  showPassword = false;
  togglePassword(){
    this.showPassword = !this.showPassword;
  }


  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  error = '';
  onSubmit() {
    if (this.loginForm.invalid) return;

    this.authservice.login(this.loginForm.value).subscribe({
      next: () => {
        alert('Login Successful');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log(err);
        alert(err.error?.message || 'Login Failed, Please try again');
      },
    });
  }
}
