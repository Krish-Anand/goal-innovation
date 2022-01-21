import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { IndexLayoutComponent } from './layout/index-layout/index-layout.component';
import { HomeComponent } from './core/component/home/home.component';
import { GoalListComponent } from '../app/core/component/goal-list/goal-list.component';
import { SurveyComponent } from './core/component/survey/survey.component';
import { GoalDashboardComponent } from './core/component/goal-dashboard/goal-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexLayoutComponent,
    HomeComponent,
    GoalListComponent,
    SurveyComponent,
    GoalDashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
