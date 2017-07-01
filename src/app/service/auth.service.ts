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

  loginWithEmailAndPassword(email:string, password:string):firebase.Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signup(email:string, password:string):firebase.Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
