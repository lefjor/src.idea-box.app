import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { environment } from "../../environments/environment";
import { Idea } from "../model/idea";
import { IdeaStoreService } from "../service/idea-store.service";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/do";

@Injectable()
export class IdeaResolve implements Resolve<Idea> {
  idea: Observable<Idea>;

  constructor(private ideaStoreService: IdeaStoreService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Idea> {
    const ideaId = route.paramMap.get("ideaId");
    if (!environment.production) {
      console.log("Resolver : IdeaResolve");
      console.log("Idea id = [" + ideaId + "]");
    }

    return this.ideaStoreService.getIdea(ideaId).take(1);

    // this.ideaStoreService.getIdea(ideaId).snapshotChanges().map(actions => {
    //   return actions.map(action => ({ key: action.key, ...action.payload.val() }));
    // });

    // return Observable.from(this.ideaStoreService.getIdea(ideaId).snapshotChanges()).do(idea => {
    //   if (idea.key === null) {
    //         return Observable.empty();
    //       } else {
    //         return this.ideaStoreService.getIdea(ideaId).valueChanges();
    //       }
    // }).take(1);
    // return tmp.do((s) => {
    //   if (s.$key === null) {
    //     return null;
    //   } else {
    //     return tmp;
    //   }
    // }).take(1);
  }
}
