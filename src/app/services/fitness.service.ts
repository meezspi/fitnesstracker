import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MessagesService } from './messages.service';
import { User } from '../models/fitness';
import { Router } from '@angular/router';
import { FitnessComponent } from '../fitness/fitness.component';

@Injectable()
export class FitnessService {

   Me: User;
   private _api = "http://localhost:8080/fitness";

 constructor(private _http: Http, private _Messages: MessagesService, private _Router: Router) {
    
 }

 login(userId: string, password: string){
  this._http.post(this._api + "/login", { userId:userId, password:password })
  .subscribe(data => {
      if(data.json().currentuser){
        this.Me = {
          Name: data.json().currentuser,
          Password: null,
          MyActivity:[],
          MyFriends:[]
        };
        this._Router.navigate(['/fitness']);
      }
    })
  }
 
register(userId: string, password: string){
  this._http.post(this._api + "/register", { userId:userId, password:password})
  .subscribe(data =>{
      if(data.json().success){
        this.Me = { Name: userId, Password: password, MyActivity:[], MyFriends:[] };
        this._Router.navigate(['/fitness']);
      }
    })

}




}
