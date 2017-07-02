import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

import {Idea} from '../model/idea';
import {IdeaStoreService} from '../service/idea-store.service';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-idea-view',
  templateUrl: './idea-view.component.html',
  styleUrls: ['./idea-view.component.scss']
})
export class IdeaViewComponent implements OnInit {
  @Input() idea:Idea;
  @Input() linkEnabled:boolean;

  constructor(private router:Router, private modalService:NgbModal, private ideaStoreService:IdeaStoreService) {
  }

  ngOnInit() {
  }

  public open(content):void {
    this.modalService.open(content);
  }

  public deleteIdea():void {
    this.ideaStoreService.deleteIdea(this.idea.$key).catch((error => {
      console.log(error)
    }));
  }

  public navigateToDetail(idea:Idea) {
    this.router.navigate(['idea-detail', idea.$key]);
  }

}
