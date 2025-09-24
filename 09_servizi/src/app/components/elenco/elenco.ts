import { Component } from '@angular/core';
import { Personaservice } from '../../services/personaservice';
import { Persona } from '../../classes/persona';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elenco',
  imports: [CommonModule],
  templateUrl: './elenco.html',
  styleUrl: './elenco.css'
})
export class Elenco {

  elenco: Persona[] = [];

  constructor(private service: Personaservice){
    console.log("Sono il costruttore di Elenco")
  }

  ngOnInit(){
    this.elenco = this.service.elenco()
  }

}
