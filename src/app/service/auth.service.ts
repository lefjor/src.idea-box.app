import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  authState$:Observable<firebase.User>;

  constructor(private afAuth:AngularFireAuth) {
    this.authState$ = afAuth.authState;
  }

  loginWithEmailAndPassword(email:string, password:string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
      console.log(res);
      console.log("je suis loggué");
    }).catch(error => {
      console.log(error);
      console.log("Mais heuuuu");
    });
  }

  signup(email: string, password: string) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

}
