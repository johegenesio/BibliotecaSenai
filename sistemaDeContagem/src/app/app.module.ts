import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CursoScreenComponent } from './curso-screen/curso-screen.component';
import { ConfirmationScreenComponent } from './confirmation-screen/confirmation-screen.component';
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    HomeScreenComponent,
    CursoScreenComponent,
    ConfirmationScreenComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
