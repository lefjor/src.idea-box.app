import { Component, OnInit } from '@angular/core';
import { Idea} from '../model/idea';
import {IdeaStoreService} from '../service/idea-store.service';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.scss']
})
export class IdeaFormComponent implements OnInit {

  idea:Idea = new Idea();

  alertDisplay:boolean = false;

  constructor(private ideaStoreService:IdeaStoreService) {
  }

  ngOnInit() {
    console.log("IdeaFormComponent : ngOnInit");
    this.idea.lastModified = new Date();
  }

  public addIdea(newIdea:Idea):void {
    console.log("app.component : addIdea");
    this.ideaStoreService.addIdea(newIdea);
  }


  public validateForm():void {
    this.idea.image = "";
    this.idea.lastModified = new Date();

    this.addIdea(this.idea);

    this.alertDisplay = true;

    // Initialisation of a new idea
    this.idea = new Idea();
  }

}
