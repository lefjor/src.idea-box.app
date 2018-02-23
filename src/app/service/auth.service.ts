import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  authState$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.authState$ = afAuth.authState;
  }

  getEmail(): string {
    return this.afAuth.auth.currentUser.email;
  }

  getPseudonyme(): string {
    return this.afAuth.auth.currentUser.displayName;
  }

  loginWithEmailAndPassword(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  updateProfile(pseudonyme: string): Promise<any> {
    return this.afAuth.auth.currentUser.updateProfile({
      displayName: pseudonyme,
      photoURL: null
    });
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
