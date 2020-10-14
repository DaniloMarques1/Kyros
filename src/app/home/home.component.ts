import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //TODO: use a custom model to represent a league
  leagues: Array<String> = ["League 1", "League 2", "League 3", "League 4"];

  constructor() { 

  }

  ngOnInit(): void {
  }

}
