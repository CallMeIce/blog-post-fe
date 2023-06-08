import { Component } from '@angular/core';
import {LoginService} from "../../../../blog-post/src/app/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private loginService: LoginService,
              private router: Router) {}

  login() {
    if (this.email && this.password) {
      const success = this.loginService.login(this.email, this.password);
      if (success) {
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Invalid email or password';
      }
    } else {
      this.errorMessage = 'Please enter email and password';
    }
  }
}
