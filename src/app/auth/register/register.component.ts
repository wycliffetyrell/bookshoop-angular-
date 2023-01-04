import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/types/Auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form: RegisterForm = {
    email: '',
    password: '',
    confirm_password: '',
  };

  constructor(private authService: AuthService) {}

  submit() {
    this.authService.register(this.form);
  }
  isLoading() {
    return this.authService.isLoading;
  }
}
