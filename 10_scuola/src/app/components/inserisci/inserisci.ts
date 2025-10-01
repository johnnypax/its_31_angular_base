import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Studente } from '../../classes/studente';

@Component({
  selector: 'app-inserisci',
  imports: [FormsModule],
  templateUrl: './inserisci.html',
  styleUrl: './inserisci.css'
})
export class Inserisci {

  nom?: string;
  cog?: string;
  dat?: string;
  mat?: string;
  cor?: string;

  salva(): void{
    let stud = new Studente();
    stud.nome = this.nom;
    stud.cognome = this.cog;
    stud.data_nas = this.dat;
    stud.matricola = this.mat;
    stud.corso = this.cor;

    console.log(stud)

  }

}
