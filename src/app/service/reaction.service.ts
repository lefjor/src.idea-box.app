import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";

import { AngularFireDatabase } from "angularfire2/database";

import { Reaction } from "../model/reaction";

import * as firebase from "firebase/app";

@Injectable()
export class ReactionService {
  private thumbsupReaction: Observable<any>;

  constructor(private af: AngularFireDatabase) {
    this.thumbsupReaction = this.af.list("/reactions/thumbsup/").valueChanges();
  }

  public getAllThumbsUp(): Observable<any> {
    return this.thumbsupReaction;
  }

  public addReaction(
    ideaKey: string,
    userId: string
  ): firebase.database.ThenableReference {
    return this.af.list("/reactions/thumbsup/" + ideaKey).push(userId);
  }

  public getAllReactions(
    reactionType: string,
    ideaKey: string
  ): Observable<Reaction[]> {
    return this.af
      .list("/reactions/" + reactionType + "/" + ideaKey + "/")
      .snapshotChanges()
      .map(actions => {
        return actions.map(action => ({
          key: action.key,
          mail: action.payload.val()
        }));
      });
  }

  public deleteReaction(ideaKey: string, reactionKey: string): Promise<void> {
    return this.af.list("/reactions/thumbsup/" + ideaKey).remove(reactionKey);
  }
}
