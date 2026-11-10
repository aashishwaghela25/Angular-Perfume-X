import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

function passwordsMatch(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirm = group.get('confirmPassword')?.value;
  return password === confirm ? null : { mismatch: true };
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  loading = false;
  error = '';
  success = '';

  showPassword = false;
  showRepeatPassword = false;
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleRepeatPassword(){
    this.showRepeatPassword = !this.showRepeatPassword;
  }

  private api = 'http://localhost:3000/api/auth';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.resetForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        code: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
        password: ['', [Validators.required, Validators.minLength(10)]],
        confirmPassword: ['', [Validators.required]],
      },
      { Validators: passwordsMatch },
    );
  }

  ngOnInit(): void {
    const email = this.route.snapshot.queryParamMap.get('email');
    if (email) this.resetForm.patchValue({ email });
  }

  submit() {
    this.error = '';
    this.success = '';

    if (this.resetForm.invalid) {
      this.resetForm.markAllAsTouched();
      return;
    }

    const { email, code, password } = this.resetForm.value;

    this.loading = true;
    this.http
      .post<{ message: string }>(`${this.api}/reset-password`, {
        email,
        code,
        password,
      })
      .subscribe({
        next: (res) => {
          this.loading = false;
          this.success = res.message;
          setTimeout(() => this.router.navigate(['/login']), 1000);
        },
        error: (err) => {
          this.loading = false;
          this.error = err.error?.message || 'Something went Wrong';
        },
      });
  }
}
