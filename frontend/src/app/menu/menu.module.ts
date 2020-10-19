import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { BaseMenuComponent } from './base-menu/base-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeMenuComponent, BaseMenuComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [HomeMenuComponent, BaseMenuComponent]
})
export class MenuModule { }
