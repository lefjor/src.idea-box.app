import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {environment} from "../../../environments/environment";

import {Idea} from '../../model/idea';
import {IdeaStoreService} from '../../service/idea-store.service';
import {FileUploadService} from '../../service/file-upload.service';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.scss']
})
export class IdeaFormComponent implements OnInit {

  idea: Idea = new Idea();

  alertDisplay: boolean = false;

  isModification: boolean = false;

  constructor(private route: ActivatedRoute, private ideaStoreService: IdeaStoreService, private fileUploadService: FileUploadService) {
  }

  ngOnInit() {
    if (!environment.production) {
      console.log("IdeaFormComponent : ngOnInit");
    }

    this.route.data
      .subscribe((data: {idea: Idea}) => {
        //console.log(data.idea);
        if (data.idea) {
          if (!environment.production) {
            console.log("Mode : modification");
          }
          this.idea = data.idea;
          this.isModification = true;
          this.idea.lastModified = new Date().getTime();
        } else {
          if (!environment.production) {
            console.log("Mode : add");
          }
          this.idea.lastModified = new Date().getTime();
        }
      });
  }

  /*public fileChanged(event : any):void {
   //this.fileUploadService.upload(event.srcElement.files[0]);
   }*/


  public validateForm(): void {
    if (!environment.production) {
      console.log("IdeaFormComponent : validateForm");
    }

    this.idea.lastModified = new Date().getTime();

    let files: FileList = (<HTMLInputElement>document.getElementById('imageInputFile')).files;

    // Uploading files
    if (files.length > 0) {
      this.fileUploadService.upload((<HTMLInputElement>document.getElementById('imageInputFile')).files).then((urlImage: string) => {
        this.idea.imageSrc = urlImage;
        this.ideaProcess();
      });
    } else {
      this.ideaProcess();
    }
  }

  private ideaProcess(): void {
    if (this.isModification) {
      this.ideaStoreService.updateIdea(this.idea).then(() => {
        this.afterIdeaSubmission();
      }).catch(error => {
        if (!environment.production) {
          console.log(error);
        }
      });
    } else {
      this.ideaStoreService.addIdea(this.idea).then(() => {
        this.afterIdeaSubmission();
      }).catch(error => {
        if (!environment.production) {
          console.log(error);
        }
      });
    }
  }

  private afterIdeaSubmission(): void {
    this.alertDisplay = true;
    // Initialisation of a new idea
    this.idea = new Idea();
  }
}
