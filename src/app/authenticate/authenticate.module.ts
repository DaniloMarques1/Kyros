import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseMenuModule } from '../base-menu/base-menu.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    BaseMenuModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    BaseMenuModule,
    MatButtonModule
  ],
  exports: [SigninComponent, SignupComponent]
})
export class AuthenticateModule { }
