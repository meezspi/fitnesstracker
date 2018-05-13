import { Component, OnInit } from '@angular/core';
import { FitnessService } from '../services/fitness.service';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

 constructor(private _Fitness: FitnessService) {
  
 }

 ngOnInit() {
 }

 login(userId: string, password: string){
   this._Fitness.login(userId, password);
 }

 
 register(userId: string, password: string){
   this._Fitness.register(userId, password);
 }
}
