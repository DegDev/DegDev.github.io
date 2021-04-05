import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './main/main.component';
import { TheoristPage } from './theorist/theorist.component';
import { ResearcherPage } from './researcher/researcher.component';
import { HistorianComponent } from './historian/historian.component';
import { ArtCriticComponent } from './art-critic/art-critic.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: MainPage },
      { path: 'theorist', component: TheoristPage },
      { path: 'researcher', component: ResearcherPage },
      { path: 'historian', component: HistorianComponent },
      { path: 'art-critic', component: ArtCriticComponent },
      { path: 'feedback', component: FeedbackComponent },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
