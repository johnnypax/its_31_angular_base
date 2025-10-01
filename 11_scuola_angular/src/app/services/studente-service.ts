import { Injectable } from '@angular/core';
import { Studente } from '../classes/studente';

@Injectable({
  providedIn: 'root'
})
export class StudenteService {


  inserisci(stu: Studente): boolean{
    return false;
  }

  async recupera(): Promise<Studente[]>{
    let risultato = await fetch("http://localhost:3000/studenti");
    let dati: Studente[] = await risultato.json();

    return dati;
  }

  elimina(matr: String): boolean{
    return false;
  }

}

