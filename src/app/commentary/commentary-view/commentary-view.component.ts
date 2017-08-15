import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from '../../service/auth.service';

import {Commentary} from '../../model/commentary';

@Component({
  selector: 'app-commentary-view',
  templateUrl: './commentary-view.component.html',
  styleUrls: ['./commentary-view.component.scss']
})
export class CommentaryViewComponent implements OnInit {

  @Input() commentary : Commentary;
  modificationAuthorized : boolean = false;

  constructor(private authService : AuthService) { }

  ngOnInit() {
    this.authService.authState$.subscribe(() => {
      if(this.authService.getEmail() === this.commentary.userId) {
        this.modificationAuthorized = true;
      }
    })
  }

  public deleteCommentary() : void {
    console.log("deleteCommentary : not implemented");
  }

  public updateCommentary() : void {
    console.log("deleteCommentary : not implemented");
  }

}
