import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CreateUserRequestDTO from 'src/app/shared/dtos/CreateUserRequestDTO';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: CreateUserRequestDTO;

  constructor(private userService: UserService, private router: Router) { 
    this.user = new CreateUserRequestDTO();
  }

  ngOnInit(): void {
  }

  signUp() {
    // TODO: validate password and confirm password before sending request
    this.userService.signUp(this.user).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/signin']);
      }
    );
  }

}
