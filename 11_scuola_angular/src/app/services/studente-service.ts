import { Injectable } from '@angular/core';
import { Studente } from '../classes/studente';

@Injectable({
  providedIn: 'root'
})
export class StudenteService {


  async inserisci(stu: Studente): Promise<boolean>{

    let risultato = await fetch("http://localhost:3000/studenti", {
      method: "POST",
      body: JSON.stringify(stu),
      headers: {
        "Content-Type": "application/json"
      }
    })

    if(risultato.ok)
      return true;

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

