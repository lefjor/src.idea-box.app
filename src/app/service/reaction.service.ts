import { Injectable } from '@angular/core';

import {BehaviorSubject, Observable} from "rxjs";

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

import * as firebase from 'firebase/app';

@Injectable()
export class ReactionService {
  private thumbsupReaction:FirebaseListObservable<any>;

  constructor(private af:AngularFireDatabase) {
    this.thumbsupReaction = this.af.list('/reactions/thumbsup/', {preserveSnapshot: true});
  }

  public getAllThumbsUp():FirebaseListObservable<any> {
    return this.thumbsupReaction;
  }

  public addReaction(ideaKey:string, userId:string):firebase.database.ThenableReference {
    return this.af.list('/reactions/thumbsup/' + ideaKey).push(userId);
  }

  public getAllReactions(reactionType:string, ideaKey:string):FirebaseListObservable<any> {
    return this.af.list('/reactions/' + reactionType + '/' + ideaKey + '/');
  }

  public deleteReaction(ideaKey:string, reactionKey:string):firebase.Promise<void> {
    return this.af.list('/reactions/thumbsup/' + ideaKey).remove(reactionKey);
  }
}
