import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from "@angular/http";
import { Activity, User, Fitness } from '../models/fitness';
import { MessagesService } from '../services/messages.service';
import { FitnessService } from '../services/fitness.service';
import { Router} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';

@Component({
 selector: 'app-fitness',
 templateUrl: './fitness.component.html',
 styleUrls: ['./fitness.component.css']
})
export class FitnessComponent implements OnInit {

   Model = new Fitness();
   Me: User;

   private _api = "http://localhost:8080/fitness";

 constructor(
     private http: Http,
     private _Messages: MessagesService,
     private _Fitness: FitnessService,
     private _Router: Router
   ) {
       this.Me = _Fitness.Me;
       if(!this.Me){
           _Router.navigate(['/login']);
       }
       else{
         this.http.get(this._api + "/activity", { params: {userId: this.Me.Name} })
         .subscribe(data=> this.Model = data.json())
       }

       setInterval(() => this.refresh(), 1000);
 }

 ngOnInit() {
 }

 @ViewChild('instance') instance: NgbTypeahead;
 focus$ = new Subject<string>();
 click$ = new Subject<string>();


 refresh(){
   this.http.get(this._api + "/state")
   .subscribe(data=> this.Model = data.json())
 }

 quoteRefresh(){
   this.http.get(this._api + "/activity")
   .subscribe(data=> this.Me = data.json())
 }

 logFitness(e: MouseEvent, activity:string, duration:string, intensity: string, share: boolean){
  e.preventDefault();
  
  this.http.post(this._api + "/activity",
    {
     Person: this.Me.Name,
     Activity: activity, 
     Duration:duration, 
     Intensity:intensity, 
     Shareable:share})
     .subscribe();
     this._Messages.Messages.push({ Text: 'New Activity Submitted', Type:'success'});
 }
 search = (text: Observable<string>) => 
    text.pipe(
      map(x=> x == ' ' ? []
      : this.http.get(this._api + '/search',
      { params: {userId: text} }
      )
      .subscribe() )
    )
 
}



