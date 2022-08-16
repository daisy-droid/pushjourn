import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenusideComponent } from './components/menuside/menuside.component';
// import { CalendarMle, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeComponent } from './components/theme/theme.component';
//import { TodayComponent } from './components/today/today.component';
import { JournalComponent } from './components/journal/journal.component';
import { RegisterComponent } from './components/register/register.component';
import {  HttpClientModule } from '@angular/common/http';
import { TodayComponent } from './today/today.component';
import { CreateComponent } from './create/create.component';




//PrimeNG Imports



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenusideComponent,
  
    LoginComponent,
       ThemeComponent,
       TodayComponent,
       JournalComponent,
       RegisterComponent,
       CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
   

    // CalendarModule.forRoot({
    // provide: DateAdapter,
    // useFactory: adapterFactory,
    // }),

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
