import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateLeagueComponent } from './create-league.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeMenuModule } from '../home-menu/home-menu.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 

@NgModule({
  declarations: [CreateLeagueComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeMenuModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  exports: [CreateLeagueComponent]
})
export class CreateLeagueModule { }
