import { Component, OnInit } from '@angular/core';
import {AuthService} from './service/auth.service';
import {Router} from '@angular/router';

import {Idea} from './model/idea';

import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showBreakingPoints : boolean = false;

  constructor(private router:Router, public authService:AuthService) {
  }

  ngOnInit():void {
    this.showBreakingPoints = environment.showBreakingPoints;
    this.authService.authState$.subscribe(auth => {
      if(auth) {
        this.router.navigate(['/idea-list'])
      }
    });
  }

  rechercher():void {
    this.router.navigate(['']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
