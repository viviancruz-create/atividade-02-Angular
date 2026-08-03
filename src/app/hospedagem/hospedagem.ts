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
  hospede_hotel? : string;
  valor_consumido? : number;
  listaPessoa: Pessoa[] = []

  addPessoa(){

    let pessoa = new Pessoa();
   pessoa.valorConsumido = this.valor_consumido;
   pessoa.hospede = this.hospede_hotel;

    //Adicionando objeto item ao array listaItens
    this.listaPessoa.push(pessoa)
    this.valor_consumido = 0.0
    this.hospede_hotel = ''
  
  }
  limparTudo(){
    this.listaPessoa = []
  }
}
