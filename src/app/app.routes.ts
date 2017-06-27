import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {IdeaListComponent} from './idea-list/idea-list.component';
import {IdeaFormComponent} from './idea-form/idea-form.component';
import {IdeaDetailComponent} from './idea-detail/idea-detail.component';

export const ROUTES:Routes = [
  {path: '', component: IdeaListComponent},
  {path: 'idea-form', component : IdeaFormComponent},
  {path: 'idea-detail/:ideaId', component : IdeaDetailComponent}
];
