import { Component, OnInit, Input } from '@angular/core';

import {Commentary} from '../../model/commentary';

@Component({
  selector: 'app-commentary-view',
  templateUrl: './commentary-view.component.html',
  styleUrls: ['./commentary-view.component.scss']
})
export class CommentaryViewComponent implements OnInit {

  @Input() commentary : Commentary;

  constructor() { }

  ngOnInit() {

  }

  public deleteCommentary() : void {
    console.log("deleteCommentary : not implemented");
  }

  public updateCommentary() : void {
    console.log("deleteCommentary : not implemented");
  }

}
