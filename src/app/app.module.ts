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
import {AuthService} from './service/auth.service';
import {IdeaFormComponent} from './idea-form/idea-form.component';
import {IdeaViewComponent} from './idea-view/idea-view.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from "angularfire2/database";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthGuard} from './service/guard/auth.guard';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [IdeaStoreService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
