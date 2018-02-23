import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {AuthService} from '../../service/auth.service';

import {FirebaseError} from 'firebase/app';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  error: FirebaseError;
  isError: boolean = false;

  ngOnInit() {
    // On connection succeed auth will be true (no need to then the loginWithEmailAndPassword
    this.authService.authState$.subscribe(auth => {
      if (auth) {
        this.router.navigate(['/ideas'])
      }
    });
  }

  login(): void {
    this.authService.loginWithEmailAndPassword(this.email, this.password).catch((error: FirebaseError) => {
      this.error = error;
      this.isError = true;
    });
    this.password = "";
  }
}
