import { Component, OnInit, Input } from '@angular/core';

import {Idea} from '../../model/idea';
import {Commentary} from '../../model/commentary';

import {CommentaryService} from '../../service/commentary.service';
import {AuthService} from '../../service/auth.service';

import * as firebase from 'firebase/app';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-commentary-form',
  templateUrl: './commentary-form.component.html',
  styleUrls: ['./commentary-form.component.scss']
})
export class CommentaryFormComponent implements OnInit {
  @Input() idea:Idea;

  comment:Commentary;

  constructor(private commentaryService:CommentaryService, private authService:AuthService) {
  }

  private initComment():void {
    this.comment = new Commentary();
    this.comment.ideaKey = this.idea.$key;
    this.comment.value = "";
    this.comment.userId = this.authService.getEmail();
    this.comment.userPseudonyme = this.authService.getPseudonyme();
  }

  ngOnInit() {
    this.initComment();
  }

  public handleKeyEvent():void {
    if(this.comment.value.trim() != "") {
      this.addCommentToIdea(this.idea);
    }
  }

  public addCommentToIdea(idea:Idea):void {
    this.comment.lastModified = new Date().getTime();
    this.comment.invertTime = Number.MAX_SAFE_INTEGER - Date.now();
    this.commentaryService.pushCommentary(this.comment).then(() => {
      this.initComment();
    });
  }

}
