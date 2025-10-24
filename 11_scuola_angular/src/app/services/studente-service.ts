import { Injectable } from '@angular/core';
import { Studente } from '../classes/studente';

@Injectable({
  providedIn: 'root'
})
export class StudenteService {


  async inserisci(stu: Studente): Promise<boolean> {

    let risultato = await fetch("http://localhost:3000/studenti", {
      method: "POST",
      body: JSON.stringify(stu),
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (risultato.ok)
      return true;

    return false;
  }

  async recupera(): Promise<Studente[]> {
    let risultato = await fetch("http://localhost:3000/studenti");
    let dati: Studente[] = await risultato.json();

    return dati;
  }

  async cercaPerMatricola(varMatr: string): Promise<Studente | null> {
    let risultato = await fetch("http://localhost:3000/studenti/" + varMatr);

    if(risultato.ok){
      let dati: Studente | null = await risultato.json();

      return dati;
    }

    return null;
  }

  elimina(matr: String): boolean {
    return false;
  }

  async modifica(stu: Studente): Promise<boolean> {

    let risultato = await fetch("http://localhost:3000/studenti/" + stu.matricola, {
      method: "PUT",
      body: JSON.stringify(stu),
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (risultato.ok)
      return true;

    return false;
  }
}

