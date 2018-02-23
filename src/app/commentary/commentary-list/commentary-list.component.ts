import { Component, OnInit, Input } from '@angular/core';
import {Observable} from "rxjs";

import {Idea} from '../../model/idea';
import {Commentary} from '../../model/commentary';

import {CommentaryService} from '../../service/commentary.service';

@Component({
  selector: 'app-commentary-list',
  templateUrl: './commentary-list.component.html',
  styleUrls: ['./commentary-list.component.scss']
})
export class CommentaryListComponent implements OnInit {
  @Input() idea: Idea;

  comments: Observable<Commentary[]>;

  constructor(private commentaryService: CommentaryService) {
  }

  ngOnInit() {
    this.comments = this.commentaryService.getCommentariesByIdeaKey(this.idea.key);

    //this.comments = this.commentaryService.getCommentariesByIdeaKey(this.idea.$key);
    //this.commentaryService.getCommentariesByIdeaKey(this.idea.$key).subscribe(test => console.log(test));
  }

}
