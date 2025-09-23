import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inserimento',
  imports: [FormsModule],
  templateUrl: './inserimento.html',
  styleUrl: './inserimento.css'
})
export class Inserimento {

  nome?: string;
  cognome?: string;
  eta?: number;

  salvataggio(){
    console.log(this.nome, this.cognome, this.eta)
  }

}
