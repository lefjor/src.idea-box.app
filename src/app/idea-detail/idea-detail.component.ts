import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IdeaStoreService} from '../service/idea-store.service';
import {Idea} from '../model/idea';

@Component({
  selector: 'app-idea-detail',
  templateUrl: './idea-detail.component.html',
  styleUrls: ['./idea-detail.component.scss']
})
export class IdeaDetailComponent implements OnInit {

  public idea : Idea;

  constructor(private route : ActivatedRoute, private ideaStoreService : IdeaStoreService ) { }

  ngOnInit() {
    const ideaId: string = this.route.snapshot.paramMap.get('ideaId');
    this.ideaStoreService.getIdea(ideaId).subscribe(idea => this.idea = idea);
  }

}
