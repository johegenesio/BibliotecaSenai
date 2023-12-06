import { Component } from '@angular/core';
import { BancoDeDadosService } from '../banco-de-dados.service';

@Component({
  selector: 'app-curso-screen',
  templateUrl: './curso-screen.component.html',
  styleUrls: ['./curso-screen.component.css']
})
export class CursoScreenComponent {
  constructor(private bd: BancoDeDadosService){ }
  enviarDados(pessoaSelecionada: string){
    const dados = {
      usuario: pessoaSelecionada
    }
    this.bd.inserirDados(dados).subscribe(resposta => {
      console.log('Sucesso!', resposta);
    },
    erro =>{
      console.error('Erro!', erro);
    })
  }
}
