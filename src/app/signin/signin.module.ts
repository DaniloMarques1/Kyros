import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { BaseMenuModule } from '../base-menu/base-menu.module';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BaseMenuModule,
    MatFormFieldModule,
    FormsModule,
  ],
  exports: [SigninComponent]
})

export class SigninModule { }
