import { Injectable } from '@angular/core';
import {Commentary} from '../model/commentary';

import {BehaviorSubject, Observable} from 'rxjs';

import {AngularFireDatabase} from 'angularfire2/database';

import * as firebase from 'firebase/app';

@Injectable()
export class CommentaryService {
  constructor(private af: AngularFireDatabase) {
  }

  public getCommentariesByIdeaKey(key: string): Observable<any> {
    return this.af.list<Commentary>('/commentaries/' + key , ref => ref.orderByChild('invertTime')).valueChanges();
  }

  public pushCommentary(commentary: Commentary): firebase.database.ThenableReference {
    return this.af.list('/commentaries/' + commentary.ideaKey).push(commentary);
  }

  public delete() {

  }
}
