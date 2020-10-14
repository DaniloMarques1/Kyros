import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMenuComponent } from './base-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [BaseMenuComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  exports: [BaseMenuComponent]
})
export class BaseMenuModule { }
