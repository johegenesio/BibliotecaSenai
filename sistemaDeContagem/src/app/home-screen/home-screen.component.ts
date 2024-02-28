import { Component } from '@angular/core';
import { BancoDeDadosService } from '../banco-de-dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent {
  //cria a variavel css
  cpf: string = '';
  
  constructor(private bd: BancoDeDadosService, private router: Router){}

  pegarCPF(){
    console.log(this.cpf);
    this.bd.setCPFTemporario(this.cpf);
  } 
}