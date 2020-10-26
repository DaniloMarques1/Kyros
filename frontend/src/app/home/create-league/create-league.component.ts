import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateLeagueRequestDTO } from 'src/app/shared/dtos/CreateLeagueRequestDTO';
import { LeagueService } from 'src/app/shared/services/league.service';

@Component({
  selector: 'app-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.scss']
})
export class CreateLeagueComponent implements OnInit {

  createLeagueDTO: CreateLeagueRequestDTO = new CreateLeagueRequestDTO();

  constructor(private leagueService: LeagueService, private router: Router) { }

  ngOnInit(): void {
  }

  addLeague(): void {
    const token = localStorage.getItem('kyrostoken');
    this.leagueService.addLeague(token, this.createLeagueDTO).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/home']);
      }
    );
  }

}
