import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SignInRequestDTO from 'src/app/shared/dtos/SignInRequestDTO';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user: SignInRequestDTO;

  constructor(private router: Router, private userService: UserService) {
    this.user = new SignInRequestDTO();
  }

  ngOnInit(): void {
  }

  signIn(): void {
    this.userService.signIn(this.user).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/home']);
      }
    );
  }

}
