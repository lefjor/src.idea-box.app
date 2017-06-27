import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

import {Idea} from '../model/idea';

@Component({
  selector: 'app-idea-view',
  templateUrl: './idea-view.component.html',
  styleUrls: ['./idea-view.component.scss']
})
export class IdeaViewComponent implements OnInit {
  @Input() idea : Idea;
  @Input() linkEnabled : boolean;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  public navigateToDetail(idea : Idea) {
    this.router.navigate(['idea-detail', idea.$key]);
  }

}
