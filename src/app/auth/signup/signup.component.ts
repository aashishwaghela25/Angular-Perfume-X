import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };

  handleClick(): void {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Name: ', this.user.name);
    console.log('Email: ', this.user.email);
    console.log('Phone: ', this.user.phone);
    console.log('Password: ', this.user.password);

    alert('Account Created Successfully!');
  }
}
