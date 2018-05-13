import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FitnessComponent } from './fitness/fitness.component';
import { LoginComponent } from './login/login.component';
import { FitnessService } from './services/fitness.service';
import { MessagesService } from './services/messages.service';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    HomeComponent,
    NavComponent,
    FitnessComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'home',component: HomeComponent },
      {path: 'fitness', component: FitnessComponent},
      {path: 'login', component: LoginComponent },
      {path: '', redirectTo: 'home',pathMatch:'full'}
    ])
  ],
  providers: [MessagesService, FitnessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
