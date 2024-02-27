import { Component } from '@angular/core';
import { BancoDeDadosService } from '../banco-de-dados.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent {
  pessoa: string = '';
  mostrar: boolean = false;

  show (pessoaSelecionada: string) {
    this.mostrar = !this.mostrar;
    this.pessoa = pessoaSelecionada;
  }
  remove() {
    this.mostrar = !this.mostrar
  }
  constructor(private bd: BancoDeDadosService){ }
  enviarDados(){
    const dataAtual = new Date()
    const dados = {
      usuario: this.pessoa,
      hora: dataAtual.getHours(),
      dia: dataAtual.getDate(),
      mes: dataAtual.getMonth() + 1
    }
    this.bd.inserirDados(dados).subscribe(resposta => {
      console.log('Sucesso!', resposta);
    },
    erro =>{
      console.error('Erro!', erro);
    })
  }
}