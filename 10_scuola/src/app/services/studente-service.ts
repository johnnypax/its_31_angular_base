import { Injectable } from '@angular/core';
import { Studente } from '../classes/studente';

@Injectable({
  providedIn: 'root'
})
export class StudenteService {
  
  constructor(){
    let elencoStringa = localStorage.getItem("scuola");
    if(!elencoStringa)
      localStorage.setItem("scuola", JSON.stringify([]));
  }

  inserisci(stu: Studente): boolean{
    let elencoStringa = localStorage.getItem("scuola")
    if(elencoStringa){
      let elenco: Studente[] = JSON.parse(elencoStringa);

      elenco.push(stu);

      localStorage.setItem("scuola", JSON.stringify(elenco))

      return true;
    }

    return false;
  }

  recupera(): Studente[]{
    let elencoStringa = localStorage.getItem("scuola")
    if(elencoStringa){
      let elenco: Studente[] = JSON.parse(elencoStringa);
      return elenco;
    }

    return [];
  }

  elimina(matr: String): boolean{
    let elencoStringa = localStorage.getItem("scuola")
    if(elencoStringa){
      let elenco: Studente[] = JSON.parse(elencoStringa);

      for(let [index, item] of elenco.entries()){
        if(item.matricola == matr){
          elenco.splice(index, 1);

          localStorage.setItem("scuola", JSON.stringify(elenco))
          return true;
        }
      }
    }

    return false;
  }

}

