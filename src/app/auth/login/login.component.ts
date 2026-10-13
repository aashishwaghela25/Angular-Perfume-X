import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };

  handleClick(): void 
  {
    console.log('Email: ', this.user.email);
    console.log('Password: ', this.user.password);

    alert('Login SuccessFul ! ');
  }
}
