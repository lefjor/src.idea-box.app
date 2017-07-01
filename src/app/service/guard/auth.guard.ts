import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {AuthService} from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService, private router: Router) {
  }

  canActivate(next:ActivatedRouteSnapshot,
              state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
    console.log("AuthGuard : canActivate");
    return this.authService.authState$
      .take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        if (!authenticated) {
          this.router.navigate(['']);
        }
      });
  }
}
