import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CursoScreenComponent } from './curso-screen/curso-screen.component';
import { ConfirmationScreenComponent } from './confirmation-screen/confirmation-screen.component';

const routes: Routes = [
  {path: '', component: WelcomeScreenComponent},
  {path: 'home', component: HomeScreenComponent},
  {path: 'curso', component: CursoScreenComponent},
  {path: 'confirmation', component: ConfirmationScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
