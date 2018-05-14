import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Activity, User, Fitness } from '../models/fitness';
import { MessagesService } from '../services/messages.service';
import { FitnessService } from '../services/fitness.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Model = new Fitness();
  Me: User;
  private _api = "http://localhost:8080/fitness";

  constructor(
    private http: Http,
    private _Router: Router,
    private _Fitness: FitnessService
  ) { 

    this.Me = _Fitness.Me;
       if(!this.Me){
           _Router.navigate(['/login']);
       }
       else{
         this.http.get(this._api + "/friends", { params: {userId: this.Me.Name} })
         .subscribe(data=> this.Me = data.json())
       }
       
       setInterval(() => this.refresh(), 1000);
  }

  ngOnInit() {
  }

  refresh(){
    this.http.get(this._api + "/state")
    .subscribe(data=> this.Model = data.json())
  }
  
  addFriends(e: MouseEvent, userId:string){
    e.preventDefault();
    this.http.post(this._api + "/friends",
    {
      myName: this.Me.Name,
      newFriend: userId})
      .subscribe();
  }

}
