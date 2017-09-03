import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {environment} from '../../../environments/environment';
import {Observable} from "rxjs";

import {AuthService} from '../../service/auth.service';
import {IdeaStoreService} from '../../service/idea-store.service';
import {Idea} from '../../model/idea';

@Component({
  selector: 'app-idea-detail',
  templateUrl: './idea-detail.component.html',
  styleUrls: ['./idea-detail.component.scss']
})
export class IdeaDetailComponent implements OnInit {

  idea: Idea;
  modificationAuthorized: Observable<boolean> | boolean = false;

  constructor(private route: ActivatedRoute, private authService: AuthService, private ideaStoreService: IdeaStoreService) {
  }

  ngOnInit() {
    if (!environment.production) {
      console.log("IdeaDetailComponent : ngOnInit");
    }

    this.route.data
      .subscribe((data: {idea: Idea}) => {
        //console.log(data.idea);
        this.idea = data.idea;
        this.authService.authState$.subscribe(() => {
          if (this.authService.getEmail() === data.idea.userId) {
            this.modificationAuthorized = Observable.of(true);
          }
        });
      })
    ;
  }
}
