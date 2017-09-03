import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {environment} from "../../environments/environment";
import {Idea} from '../model/idea';
import {IdeaStoreService} from '../service/idea-store.service';
import {Observable} from "rxjs";

import 'rxjs/add/operator/do';

@Injectable()
export class IdeaResolve implements Resolve<Idea> {

  idea: Observable<Idea>;

  constructor(private ideaStoreService: IdeaStoreService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Idea> {
    if (!environment.production) {
      console.log("Resolver : IdeaResolve");
      console.log("Idea id = [" + route.paramMap.get('ideaId') + "]");
    }
    let tmp = this.ideaStoreService.getIdea(route.paramMap.get('ideaId'));
    return tmp.do((s) => {
      if (s.$value === null) {
        return null;
      } else {
        return tmp;
      }
    }).take(1);
  }
}
