import { Injectable } from '@angular/core';
import {Idea} from '../model/idea';

import {BehaviorSubject, Observable} from "rxjs";

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@Injectable()
export class IdeaStoreService {
  //private _ideas$:BehaviorSubject<Idea[]> = new BehaviorSubject<Idea[]>([]);
  private ideas : FirebaseListObservable<any[]>;
  //private ideas:Idea[] = [];

  constructor(private af:AngularFireDatabase) {
    console.log("IdeaStoreService : constructor");
    this.ideas = this.af.list('/ideas');
  }

  get ideas$() {
    return this.ideas/*.asObservable()*/;
  }

  public addIdea(newIdea:Idea) : void {
    this.ideas.push(newIdea);
  }

  public getIdea($key : string) : FirebaseObjectObservable<Idea> {
    return this.af.object('/ideas/' + $key);
  }
}
