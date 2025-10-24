import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StudenteService } from '../../services/studente-service';
import { FormsModule } from '@angular/forms';
import { Studente } from '../../classes/studente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dettaglio',
  imports: [FormsModule, CommonModule],
  templateUrl: './dettaglio.html',
  styleUrl: './dettaglio.css'
})
export class Dettaglio {

  nom?: string;
  cog?: string;
  mat?: string;
  dat?: string;
  cor?: string;

  studenteTrovato: boolean = false;

  constructor(
    private rottaAttiva: ActivatedRoute,
    private service: StudenteService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.rottaAttiva.params.subscribe(risultato => {
      let matricola = risultato['matr'];

      if (matricola) {
        this.service.cercaPerMatricola(matricola).then(s => {
          if (s) {
            this.studenteTrovato = true;

            this.nom = s.nome;
            this.cog = s.cognome;
            this.mat = matricola;
            this.dat = s.data_nas;
            this.cor = s.corso
          }
        })
      }

    })
  }

  modifica(): void {


    let stud = new Studente();
    stud.nome = this.nom;
    stud.cognome = this.cog;
    stud.data_nas = this.dat;
    stud.matricola = this.mat;
    stud.corso = this.cor;

    this.service.modifica(stud)
      .then(riu => {
        if (riu) {
          alert("STAPPOOOOO")
          this.router.navigateByUrl("elenca")
        }

        else
          alert("ERRORE INSERIMENTO")
      })
      .catch(e => {
        alert("Errore di comunicazione API");
        console.log(e)
      })
  }

}
