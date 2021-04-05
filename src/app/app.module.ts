import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlertModule  } from 'ngx-bootstrap/alert';
import { MainPage } from './main/main.component';
import { TheoristPage } from './theorist/theorist.component';
import { ResearcherPage } from './researcher/researcher.component';
import { HistorianComponent } from './historian/historian.component';
import { ArtCriticComponent } from './art-critic/art-critic.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MainPage,
    TheoristPage,
    ResearcherPage,
    HistorianComponent,
    ArtCriticComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule,
    FormsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
