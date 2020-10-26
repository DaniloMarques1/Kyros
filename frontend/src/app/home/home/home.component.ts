import { Component, OnInit } from '@angular/core';

import { LeagueService } from '../../shared/services/league.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private leagueService: LeagueService, private router: Router) {
    const token = localStorage.getItem('kyrostoken');
    if (!token) {
      this.router.navigate(['/']);
      return;
    }

    this.leagueService.getAllLeagues(token).subscribe(
      response => {
        console.log(response)
      }
    )
  }

  ngOnInit(): void {
  }

}
