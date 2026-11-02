import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  signup(data: {
    name: String;
    email: string;
    mobile: number;
    password: string;
    confirmPassword: String;
  }) {
    return this.http.post(`${this.apiUrl}/signup`, data);
  }
}
