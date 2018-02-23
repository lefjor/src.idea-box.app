import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {AuthService} from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!environment.production) {
      console.log("AuthGuard : canActivate");
    }
    return this.authService.authState$
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
        if
        (!authenticated) this.router.navigate([ '/login' ]);
      })
  }
}
