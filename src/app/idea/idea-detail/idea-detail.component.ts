import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject, Observable} from "rxjs";

import {AuthService} from '../../service/auth.service';
import {IdeaStoreService} from '../../service/idea-store.service';
import {Idea} from '../../model/idea';

@Component({
  selector: 'app-idea-detail',
  templateUrl: './idea-detail.component.html',
  styleUrls: ['./idea-detail.component.scss']
})
export class IdeaDetailComponent implements OnInit {

  idea:Observable<Idea>;
  modificationAuthorized:boolean = false;

  constructor(private route:ActivatedRoute, private authService:AuthService, private ideaStoreService:IdeaStoreService) {
  }

  ngOnInit() {
    console.log("IdeaDetailComponent : ngOnInit");
    const ideaId:string = this.route.snapshot.paramMap.get('ideaId');
    console.log("ideaId", ideaId);
    this.idea = this.ideaStoreService.getIdea(ideaId);
    this.idea.subscribe((idea : Idea) => {
      this.authService.authState$.subscribe(() => {
        if (this.authService.getEmail() === idea.userId) {
          this.modificationAuthorized = true;
        }
      });
    });
    //this.ideaStoreService.getIdea(ideaId).subscribe(idea => console.log(idea));
    //this.ideaStoreService.getIdea(ideaId).subscribe(idea => this.idea = idea);

  }

}