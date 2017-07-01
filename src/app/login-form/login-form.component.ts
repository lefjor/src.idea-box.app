import { Component, OnInit } from '@angular/core';

import { AuthService } from '../service/auth.service';

import {FirebaseError} from 'firebase/app';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  email:string;
  password:string;

  constructor(private authService:AuthService) {
  }

  error : FirebaseError;
  isError : boolean = false;

  ngOnInit() {
  }

  login():void {
    this.authService.loginWithEmailAndPassword(this.email, this.password).catch((error : FirebaseError) => {
      this.error = error;
      this.isError = true;
    });
    this.password = "";
  }

  logout() {
    this.authService.logout();
  }

  signup() {
    this.authService.signup(this.email, this.password).catch((error : FirebaseError) => {
      this.error = error;
      this.isError = true;
    });;
    this.email = this.password = '';
  }

}
