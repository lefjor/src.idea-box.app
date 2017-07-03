import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {IdeaListComponent} from './idea-list/idea-list.component';
import {IdeaFormComponent} from './idea-form/idea-form.component';
import {IdeaDetailComponent} from './idea-detail/idea-detail.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {AuthGuard} from './service/guard/auth.guard';

export const ROUTES:Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'idea-form', component : IdeaFormComponent, canActivate: [AuthGuard]},
  {path: 'idea-form/:ideaId', component : IdeaFormComponent, canActivate: [AuthGuard]},
  {path: 'idea-detail/:ideaId', component : IdeaDetailComponent, canActivate: [AuthGuard]},
  {path: 'idea-list', component : IdeaListComponent, canActivate: [AuthGuard]},

  // default path to login
  //{ path: '**', redirectTo: '' }
];
