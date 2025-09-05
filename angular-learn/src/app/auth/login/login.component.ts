import { Component } from '@angular/core';
import { LoginForm } from '../../models/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formData: LoginForm = {
    email: '',
    password: ''
  };

  submit(){
    alert(`Hello! ${this.formData.email} is loged in...`);
  }
}
