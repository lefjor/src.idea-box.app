import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../service/auth.service';

import {FirebaseError} from 'firebase/app';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  pseudonyme:string;
  email:string;
  password:string;

  constructor(private authService:AuthService) {
  }

  error:FirebaseError;
  isError:boolean = false;

  ngOnInit() {
  }

  signup() {
    this.authService.signup(this.email, this.password).then(() => {
      this.authService.updateProfile(this.pseudonyme).then(() => {
        this.pseudonyme = this.email = this.password = '';
      })
    }).catch((error:FirebaseError) => {
      this.error = error;
      this.isError = true;
    });
  }

}
