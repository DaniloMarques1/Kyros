import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './authenticate/signin/signin.component';
import { SignupComponent } from './authenticate/signup/signup.component';
import { CreateLeagueComponent } from './home/create-league/create-league.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'createleague',
    component: CreateLeagueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
