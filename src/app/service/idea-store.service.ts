import { Injectable } from "@angular/core";
import { Idea } from "../model/idea";
import { environment } from "../../environments/environment";

import { Observable } from "rxjs/Observable";

import {
  AngularFireDatabase,
  AngularFireObject,
  AngularFireList
} from "angularfire2/database";

import * as firebase from "firebase/app";

@Injectable()
export class IdeaStoreService {
  private ideasRef: AngularFireList<Idea>;
  private ideas: Observable<Idea[]>;

  constructor(private af: AngularFireDatabase) {
    if (!environment.production) {
      console.log("IdeaStoreService : constructor");
    }
    this.ideasRef = this.af.list<Idea>("/ideas");
    this.ideas = this.ideasRef.snapshotChanges().map(actions => {
      return actions.map(action => ({
        key: action.key,
        ...action.payload.val()
      }));
    });
  }

  get ideas$() {
    return this.ideas;
  }

  public addIdea(newIdea: Idea): firebase.database.ThenableReference {
    return this.ideasRef.push(newIdea);
  }

  public getIdea(key: string): Observable<Idea> {
    if (!environment.production) {
      console.log("IdeaStoreService : getIdea : [" + key + "]");
    }
    return this.af
      .object<Idea>("/ideas/" + key)
      .snapshotChanges()
      .map(action => {
        return { key: action.key, ...action.payload.val() };
      });
  }

  public updateIdea(idea: Idea): Promise<void> {
    return this.af.object("/ideas/" + idea.key).update(idea);
  }

  public deleteIdea($key: string): Promise<void> {
    return this.af.object("/ideas/" + $key).remove();
  }
}
