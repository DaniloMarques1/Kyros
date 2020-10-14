import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMenuComponent } from './home-menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [HomeMenuComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  exports: [HomeMenuComponent]
})
export class HomeMenuModule { }
