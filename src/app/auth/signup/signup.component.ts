import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  showPassword = false;
  showConfirmPassword = false;
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(){
    this.showConfirmPassword = !this.showConfirmPassword;
  }


  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{10}$/),
          Validators.maxLength(10),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(10)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('Signup Data:', this.signupForm.value);

    this.authservice.signup(this.signupForm.value).subscribe({
      next: (res) => {
        console.log('Signup Success', res);
        alert('Account created successfully!');
        this.signupForm.reset();
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
        alert(err.error?.message || 'Signup Failed, Please try again');
      },
    });
  }
}
