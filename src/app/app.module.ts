import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import {ROUTES} from './app.routes';

import {AppComponent } from './app.component';
import {IdeaListComponent } from './idea-list/idea-list.component';
import {IdeaDetailComponent} from './idea-detail/idea-detail.component';

import {IdeaStoreService} from './service/idea-store.service';
import {IdeaFormComponent} from './idea-form/idea-form.component';
import {IdeaViewComponent} from './idea-view/idea-view.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from "angularfire2/database";

// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyAdtqf6iHjXNc_GVMXmTKBeg60BQqHVNik",
  authDomain: "idea-box-f3b21.firebaseapp.com",
  databaseURL: "https://idea-box-f3b21.firebaseio.com",
  projectId: "idea-box-f3b21",
  storageBucket: "idea-box-f3b21.appspot.com",
  messagingSenderId: "621492012579"
};


@NgModule({
  declarations: [
    AppComponent,
    IdeaListComponent,
    IdeaDetailComponent,
    IdeaFormComponent,
    IdeaViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [IdeaStoreService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
