import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Pessoa} from './pessoa';
@Component({
  selector: 'app-hospedagem',
  imports: [FormsModule],
  templateUrl: './hospedagem.html',
  styleUrl: './hospedagem.css',
})
export class Hospedagem {
  valor_consumido? : number;
  listaPessoa: Pessoa[] = []

  addPessoa(){

    let pessoa = new Pessoa();
    pessoa.idHospede = this.listaPessoa.
    pessoa.valorConsumido = this.valor_consumido;

    //Adicionando objeto item ao array listaItens
    this.listaPessoa.push(pessoa)
    this.valor_consumido = 0.0

  }
  limparTudo(){
    this.listaPessoa = []
  }
}
