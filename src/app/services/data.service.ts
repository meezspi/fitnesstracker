import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MessagesService } from './messages.service';
import { User, Data } from '../models/data';
import { Router } from '@angular/router';

@Injectable()
export class DataService {

    Me: User;
    AllUsers: Data["UserNames"];

  constructor(private http: Http, private _Messages: MessagesService, private _Router: Router) {
      
  }

  login(user: string, password: string){
      if(this.AllUsers.some(x=> x.Name == name)){
        if(password == this.Me.Password){
          // Log the user in
          this.Me = this.AllUsers.find(x=> x.Name == name);
          this._Router.navigate(['/game']);
      }
    }
  }

}