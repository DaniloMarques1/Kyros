import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signOut(): void {
    localStorage.removeItem('kyrostoken');
  }

}
