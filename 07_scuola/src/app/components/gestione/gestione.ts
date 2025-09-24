import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Studente } from '../../classes/studente';

@Component({
  selector: 'app-gestione',
  imports: [FormsModule, CommonModule],
  templateUrl: './gestione.html',
  styleUrl: './gestione.css'
})
export class Gestione {

  nome?: string;
  cognome?: string;
  matricola?: string;
  data?: string;
  corso?: string;
  
  elenco: Studente[] = [];

  salva(): void{
    let stu = new Studente();
    stu.nome = this.nome;
    stu.cognome = this.cognome;
    stu.matricola = this.matricola;
    stu.data_nas = this.data;
    stu.corso = this.corso;

    this.elenco.push(stu);
    console.log(stu)

    this.nome = "";
    this.cognome = "";
    this.matricola = "";
    this.data = "";
    this.corso = "";
  }

}
