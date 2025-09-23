import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Persona } from '../../classes/persona';

@Component({
  selector: 'app-visualizzazione',
  imports: [CommonModule],
  templateUrl: './visualizzazione.html',
  styleUrl: './visualizzazione.css'
})
export class Visualizzazione {

  nominativo? : string = "Giovanni Pace"

  ingredienti: string[] = ["Farina", "Acqua", "Lievito"]

  elenco: Persona[] = [
    new Persona("Giovanni", "Pace", 38),
    new Persona("Valeria", "Verdi", 20),
    new Persona("Mario", "Rossi", 85)
  ];

}
