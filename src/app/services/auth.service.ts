import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  //signup
  signup(user: {
    name: String;
    email: string;
    mobile: number;
    password: string;
    confirmPassword: String;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  //login
  login(user: { email: string; password: string }): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/login`, user)
      .pipe(tap((res) => localStorage.setItem('token', res.token)));
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
