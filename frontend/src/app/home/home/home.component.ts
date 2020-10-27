import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { League } from 'src/app/shared/models/League';
import { LeagueService } from '../../shared/services/league.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myLeagues: League[];
  availableLeagues: League[];

  constructor(private leagueService: LeagueService, private router: Router) {
    const token = localStorage.getItem('kyrostoken');
    if (!token) {
      this.router.navigate(['/']);
      return;
    }

    this.leagueService.getAllLeagues(token).subscribe(
      response => {
        console.log(response);
        this.myLeagues = response.myLeagues;
        this.availableLeagues = response.availableLeagues;
      }
    );
  }

  ngOnInit(): void {
  }

  remove(id: number): void {
    const token = localStorage.getItem('kyrostoken');
    this.leagueService.removeLeague(id.toString(), token).subscribe(
      response => {
        console.log(response);
        this.myLeagues = this.myLeagues.filter(league => league.id !== id);
      }
    );
  }

}
