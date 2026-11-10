import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  fpForm!: FormGroup;
  message = '';
  loading = false;

  constructor(
    private fp: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fpForm = this.fp.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  onSubmit() {
    if (this.fpForm.invalid) return;

    this.loading = true;
    this.message = '';

    this.http
      .post<{ message: string }>(
        'http://localhost:3000/api/auth/forgot-password',
        {
          email: this.fpForm.value.email
        },
      )
      .subscribe({
        next: (res) => {
          this.message = res.message;
          this.loading = false;
          this.router.navigate(['/reset-password'],{
            queryParams: {email: this.fpForm.value.email},
          })
        },
        error: (err) => {
          this.message = err.error?.message || 'Something went wrong';
          this.loading = false;
        },
      });
  }
}
