import { Component, OnInit } from '@angular/core';
import { IdeaStoreService} from './service/idea-store.service';
import {Router} from '@angular/router';

import {Idea} from './model/idea';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private ideaStoreService:IdeaStoreService, private router:Router) {
  }

  ngOnInit():void {
  }

  rechercher():void {
    this.router.navigate(['']);
  }


}
