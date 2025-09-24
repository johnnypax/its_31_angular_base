import { Injectable } from '@angular/core';
import { Persona } from '../classes/persona';

@Injectable({
  providedIn: 'root'
})
export class Personaservice {

  constructor(){
    let elencoStringa = localStorage.getItem("invitati");

    if(!elencoStringa)
      localStorage.setItem("invitati", JSON.stringify([]))
  }

  elenco(): Persona[] {
    let elencoStringa = localStorage.getItem("invitati");
    if(elencoStringa){
      return JSON.parse(elencoStringa);
    }

    return [];
  }

  inserisci(p: Persona): boolean{

    //Prendo l'elenco sotto forma di stringa nel LS
    let elencoStringa = localStorage.getItem("invitati");
    //Trasformo l'elenco in JavaScript dalla Stringa di sopra
    if(elencoStringa){
      let elenco: Persona[] = JSON.parse(elencoStringa);

      //Aggiungo la persona all'elenco
      elenco.push(p);

      //Ritrasformo in stringa e salvo
      localStorage.setItem("invitati", JSON.stringify(elenco))

      return true;
    }

    return false;
  }
  
}
