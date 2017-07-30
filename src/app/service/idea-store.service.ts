import { Injectable } from '@angular/core';
import {Idea} from '../model/idea';

import {BehaviorSubject, Observable} from "rxjs";

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

import * as firebase from 'firebase/app';

@Injectable()
export class IdeaStoreService {
  private ideas:FirebaseListObservable<any[]>;

  constructor(private af:AngularFireDatabase) {
    console.log("IdeaStoreService : constructor");
    this.ideas = this.af.list('/ideas');
  }

  get ideas$() {
    return this.ideas/*.asObservable()*/;
  }

  public addIdea(newIdea:Idea):firebase.database.ThenableReference {
    return this.ideas.push(newIdea);
  }

  public getIdea(key:string):FirebaseObjectObservable<Idea> {
    console.log("IdeaStoreService : getIdea : " + key);
    return this.af.object(`/ideas/${key}`);
  }

  public updateIdea(idea:Idea):firebase.Promise<void> {
    return this.af.object('/ideas/' + idea.$key).update(idea);
  }

  public deleteIdea($key:string):firebase.Promise<void> {
    return this.af.object('/ideas/' + $key).remove();
  }
}
