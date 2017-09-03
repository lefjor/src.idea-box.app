import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {IdeaListComponent} from './idea/idea-list/idea-list.component';
import {IdeaFormComponent} from './idea/idea-form/idea-form.component';
import {IdeaDetailComponent} from './idea/idea-detail/idea-detail.component';
import {LoginFormComponent} from './connexion/login-form/login-form.component';
import {SignupFormComponent} from './connexion/signup-form/signup-form.component';
import {BugFormComponent} from './bug/bug-form/bug-form.component';
import {AuthGuard} from './service/guard/auth.guard';
import {IdeaResolve} from './idea/idea.resolve';

export const ROUTES:Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'signup', component: SignupFormComponent},
  {
    path: '', /*canActivate: [AuthGuard],*/
    children: [
      {path: 'idea-form/:ideaId', component: IdeaFormComponent, resolve: {idea: IdeaResolve}},
      {path: 'idea-form', component: IdeaFormComponent},
      {path: 'idea-detail/:ideaId', component: IdeaDetailComponent, resolve: {idea: IdeaResolve}},
      {path: 'idea-list', component: IdeaListComponent},
      {path: 'bug-form', component: BugFormComponent}
    ]
  },
  /*{path: '', redirectTo: 'idea-list', pathMatch: 'full'},
   /*{
   path: '**',
   redirectTo: '/idea-list',
   pathMatch: 'full'
   }*/
];
