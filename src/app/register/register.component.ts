import { Component } from '@angular/core';
import {LoginService} from "../../../../blog-post/src/app/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private loginService: LoginService,
              private router: Router) {}

  register() {
    if (this.username && this.email && this.password) {
      const success = this.loginService.register(this.username, this.email, this.password);
      if (success) {
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Registration failed';
      }
    } else {
      this.errorMessage = 'Please enter all fields';
    }
  }

}
