import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { Idea} from '../model/idea';
import {IdeaStoreService} from '../service/idea-store.service';
import {FileUploadService} from '../service/file-upload.service';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.scss']
})
export class IdeaFormComponent implements OnInit {

  idea:Idea = new Idea();

  alertDisplay:boolean = false;

  isModification:boolean = false;

  constructor(private route:ActivatedRoute, private ideaStoreService:IdeaStoreService, private fileUploadService : FileUploadService) {
  }

  ngOnInit() {
    console.log("IdeaFormComponent : ngOnInit");
    const ideaId:string = this.route.snapshot.paramMap.get('ideaId');
    if (ideaId) {
      console.log("Mode : modification");
      this.ideaStoreService.getIdea(ideaId).subscribe(idea => {
        this.idea = idea;
        this.idea.lastModified = new Date().getTime();
      });
      this.isModification = true;
    } else {
      console.log("Mode : add");
      this.idea.lastModified = new Date().getTime();
    }

  }

  /*public fileChanged(event : any):void {
    //this.fileUploadService.upload(event.srcElement.files[0]);
  }*/



  public validateForm():void {
    console.log("IdeaFormComponent : validateForm");

    this.idea.lastModified = new Date().getTime();

    this.fileUploadService.upload((<HTMLInputElement>document.getElementById('imageInputFile')).files).then((urlImage : string) => {
      this.idea.imageSrc = urlImage;
      if (this.isModification) {
        this.ideaStoreService.updateIdea(this.idea).then(() => {
          this.afterIdeaSubmission();
        }).catch(error => {
          console.log(error);
        });
      } else {
        this.ideaStoreService.addIdea(this.idea).then(() => {
          this.afterIdeaSubmission();
        }).catch(error => {
          console.log(error);
        });
      }
    });
  }

  private afterIdeaSubmission() : void {
    this.alertDisplay = true;
    // Initialisation of a new idea
    this.idea = new Idea();
  }
}
