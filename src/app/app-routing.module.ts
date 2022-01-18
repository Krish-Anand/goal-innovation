import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/component/home/home.component';
import { GoalListComponent } from '../app/core/component/goal-list/goal-list.component';
import { IndexLayoutComponent } from './layout/index-layout/index-layout.component';
import { SurveyComponent } from './core/component/survey/survey.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: IndexLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'survey', component: SurveyComponent },
      { path: 'goal-list', component: GoalListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
