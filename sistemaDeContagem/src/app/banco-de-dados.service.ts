import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BancoDeDadosService {
  private firebaseUrl = 'https://biblioteca-senai-5b3e9-default-rtdb.firebaseio.com/.json'
  constructor(private httpClient: HttpClient) { }
  inserirDados(dados: any) {
    return this.httpClient.post(this.firebaseUrl, dados);
  }
}
