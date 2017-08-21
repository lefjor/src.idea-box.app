import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import {ROUTES} from './app.routes';

// COMPONENT
import {AppComponent } from './app.component';
// idea
import {IdeaDetailComponent} from './idea/idea-detail/idea-detail.component';
import {IdeaFormComponent} from './idea/idea-form/idea-form.component';
import {IdeaListComponent } from './idea/idea-list/idea-list.component';
import {IdeaViewComponent} from './idea/idea-view/idea-view.component';
// commentary
import { CommentaryFormComponent } from './commentary/commentary-form/commentary-form.component';
import { CommentaryViewComponent } from './commentary/commentary-view/commentary-view.component';
import { CommentaryListComponent } from './commentary/commentary-list/commentary-list.component';
// connexion
import { LoginFormComponent } from './connexion/login-form/login-form.component';
import { SignupFormComponent } from './connexion/signup-form/signup-form.component';
// bug
import { BugFormComponent } from './bug/bug-form/bug-form.component';

// SERVICE
import {IdeaStoreService} from './service/idea-store.service';
import {CommentaryService} from './service/commentary.service';
import {AuthService} from './service/auth.service';
import {FileUploadService} from './service/file-upload.service';
import {ReactionService} from './service/reaction.service';

// GUARD
import { AuthGuard} from './service/guard/auth.guard';

// UTILS
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from "angularfire2/database";
import { AngularFireAuthModule } from 'angularfire2/auth';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    IdeaListComponent,
    IdeaDetailComponent,
    IdeaFormComponent,
    IdeaViewComponent,
    LoginFormComponent,
    CommentaryFormComponent,
    CommentaryViewComponent,
    CommentaryListComponent,
    SignupFormComponent,
    BugFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES/*, { enableTracing: true }*/),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [IdeaStoreService, CommentaryService, ReactionService, FileUploadService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
