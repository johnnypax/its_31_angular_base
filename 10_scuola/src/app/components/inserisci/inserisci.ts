import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Studente } from '../../classes/studente';
import { StudenteService } from '../../services/studente-service';
import { Router } from '@angular/router';

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

  constructor(private service: StudenteService, private router: Router){

  }

  salva(): void{
    let stud = new Studente();
    stud.nome = this.nom;
    stud.cognome = this.cog;
    stud.data_nas = this.dat;
    stud.matricola = this.mat;
    stud.corso = this.cor;

    // console.log(stud)
    if(this.service.inserisci(stud)){
      alert("STAPPOOOOOO")

      this.nom = "";
      this.cog = "";
      this.dat = "";
      this.mat = "";
      this.cor = "";

      this.router.navigateByUrl("elenca")
    }
    else{
      alert("ERRORE")
    }
    //Service
    //INserisci nel service

  }

}
