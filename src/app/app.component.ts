import { Component, OnInit } from '@angular/core';
import { IdeaStoreService} from './service/idea-store.service';
import {AuthService} from './service/auth.service';
import {Router} from '@angular/router';

import {Idea} from './model/idea';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private ideaStoreService:IdeaStoreService, private router:Router, private authService:AuthService) {
  }

  ngOnInit():void {
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
