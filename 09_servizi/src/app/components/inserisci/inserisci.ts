import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Persona } from '../../classes/persona';
import { Personaservice } from '../../services/personaservice';

@Component({
  selector: 'app-inserisci',
  imports: [FormsModule],
  templateUrl: './inserisci.html',
  styleUrl: './inserisci.css'
})
export class Inserisci {

  nom?: string
  cog?: string
  eta?: number

  constructor(private service: Personaservice){

  }

  salva(): void{
    let per = new Persona();
    per.nome = this.nom;
    per.cognome = this.cog;
    per.eta = this.eta;

    if(this.service.inserisci(per))
      alert("STAPPOOOOOOO")
    else
      alert("Errore di inserimento")
  }

}
