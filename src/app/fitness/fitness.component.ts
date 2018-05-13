import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Activity, User, Fitness } from '../models/fitness';
import { MessagesService } from '../services/messages.service';
import { FitnessService } from '../services/fitness.service';
import { Router} from '@angular/router';


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
       setInterval(() => this.refresh(), 1000);
 }

 ngOnInit() {
 }

 refresh(){
   this.http.get(this._api + "/state")
   .subscribe(data=> this.Model = data.json())
 }

 logFitness(e: MouseEvent, activity:string, duration:string, intensity: string, share: boolean){
  e.preventDefault();
  this.http.post(this._api,
    {User: this.Me,
     Activity: activity, 
     Duration:duration, 
     Intensity:intensity, 
     Shareable:share})
 }



}
