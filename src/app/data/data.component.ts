import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Activity, User, Data } from '../models/data';
import { MessagesService } from '../services/messages.service';
import { DataService } from '../services/data.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

    Me: User;

    private _api = "http://localhost:8080/data";

  constructor(
      private http: Http,
      private _Messages: MessagesService, 
      private _Data: DataService, 
      private _Router: Router
    ) {
        this.Me = _Data.Me;
        if(!this.Me){
            _Router.navigate(['/login']);
        }
  }

  ngOnInit() {
  }

  


}

