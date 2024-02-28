import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CursoScreenComponent } from './curso-screen/curso-screen.component';
import { ConfirmationScreenComponent } from './confirmation-screen/confirmation-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    HomeScreenComponent,
    CursoScreenComponent,
    ConfirmationScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
