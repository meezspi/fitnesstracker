import { Component, OnInit } from '@angular/core';
import { FitnessService } from '../services/fitness.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public Fitness: FitnessService) { 

  }

  ngOnInit() {
  }

}
