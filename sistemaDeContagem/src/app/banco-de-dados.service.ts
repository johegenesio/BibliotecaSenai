import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BancoDeDadosService {
  private firebaseUrl = 'https://biblioteca-senai-5b3e9-default-rtdb.firebaseio.com/.json';
  private cpfTemporario: string = '';
  constructor(private httpClient: HttpClient) { }
  inserirDados(dados: any) {
    return this.httpClient.post(this.firebaseUrl, dados);
  }

  // Método para definir o CPF temporário
  setCPFTemporario(cpf: string) {
    this.cpfTemporario = cpf;
  }

  // Método para obter o CPF temporário
  getCPFTemporario() {
    return this.cpfTemporario;
  }
}
