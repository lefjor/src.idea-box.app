import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { Idea} from '../model/idea';
import {IdeaStoreService} from '../service/idea-store.service';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.scss']
})
export class IdeaFormComponent implements OnInit {

  idea:Idea = new Idea();

  alertDisplay:boolean = false;

  isModification:boolean = false;

  constructor(private route:ActivatedRoute, private ideaStoreService:IdeaStoreService) {
  }

  ngOnInit() {
    console.log("IdeaFormComponent : ngOnInit");
    const ideaId:string = this.route.snapshot.paramMap.get('ideaId');
    if (ideaId) {
      console.log("Mode : modification");
      this.ideaStoreService.getIdea(ideaId).subscribe(idea => {
        this.idea = idea;
        this.idea.lastModified = new Date();
      });
      this.isModification = true;
    } else {
      console.log("Mode : add");
      this.idea.lastModified = new Date();
    }
  }

  public validateForm():void {
    console.log("IdeaFormComponent : validateForm");
    //this.idea.image = "";
    this.idea.lastModified = new Date();

    if (this.isModification) {
      this.ideaStoreService.updateIdea(this.idea);
    } else {
      this.ideaStoreService.addIdea(this.idea).then(() => {
        this.alertDisplay = true;
      }).catch(error => {

      });
    }

    // Initialisation of a new idea
    this.idea = new Idea();
  }

}
