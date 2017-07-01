import { Component, OnInit } from '@angular/core';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  login() : void {
    this.authService.loginWithEmailAndPassword(this.email, this.password);
    this.email = this.password = "";
  }

  logout() {
    this.authService.logout();
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

}
