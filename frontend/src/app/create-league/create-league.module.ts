import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateLeagueComponent } from './create-league.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [CreateLeagueComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MenuModule
  ],
  exports: [CreateLeagueComponent]
})
export class CreateLeagueModule { }
