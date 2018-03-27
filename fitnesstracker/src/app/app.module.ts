import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DataComponent } from './data/data.component';




@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    HomeComponent,
    NavComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home',component: HomeComponent },
      {path: 'data', component: DataComponent},
      { path: '', redirectTo: 'home',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
