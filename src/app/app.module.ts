import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninModule } from './signin/signin.module';
import { BaseMenuModule } from './base-menu/base-menu.module';
import { HomeModule } from './home/home.module';
import { CreateLeagueModule } from './create-league/create-league.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SigninModule,
    BaseMenuModule,
    HomeModule,
    CreateLeagueModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
