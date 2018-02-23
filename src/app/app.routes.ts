import {Routes} from '@angular/router';
import {IdeaListComponent} from './idea/idea-list/idea-list.component';
import {IdeaFormComponent} from './idea/idea-form/idea-form.component';
import {IdeaDetailComponent} from './idea/idea-detail/idea-detail.component';
import {LoginFormComponent} from './connexion/login-form/login-form.component';
import {SignupFormComponent} from './connexion/signup-form/signup-form.component';
import {BugFormComponent} from './bug/bug-form/bug-form.component';
import {AuthGuard} from './service/guard/auth.guard';
import {IdeaResolve} from './idea/idea.resolve';

export const ROUTES: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'signup', component: SignupFormComponent},
  {path: 'bugs/add', component: BugFormComponent},
  {
    path: '', canActivate: [AuthGuard],
    children: [
      {path: 'ideas/add', component: IdeaFormComponent},
      {path: 'ideas/add/:ideaId', component: IdeaFormComponent, resolve: {idea: IdeaResolve}},
      {path: 'ideas/:ideaId', component: IdeaDetailComponent, resolve: {idea: IdeaResolve}},
      {path: 'ideas', component: IdeaListComponent}
    ]
  }
];
