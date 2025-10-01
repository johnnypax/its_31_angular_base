import { Component } from '@angular/core';
import { StudenteService } from '../../services/studente-service';
import { Studente } from '../../classes/studente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elenca',
  imports: [CommonModule],
  templateUrl: './elenca.html',
  styleUrl: './elenca.css'
})
export class Elenca {

  elenco: Studente[] = []

  constructor(private service: StudenteService){

  }

  ngOnInit(){
    this.aggiorna();
  }

  aggiorna(){
    this.service.recupera().then((lista: Studente[]) => {
      console.log(lista)
      this.elenco = lista;
    })
  }

  elimina(matr?: String): void{
    if(matr){
      if(this.service.elimina(matr)){
        alert("STAPPOOOOOOO");
        
        this.aggiorna();
        return;
      }
      else{
        alert("ERRORE!")
        return;
      }
    }

    alert("Errore matricola non presente!")
  }

}
