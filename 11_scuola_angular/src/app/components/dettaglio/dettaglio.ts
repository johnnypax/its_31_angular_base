import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettaglio',
  imports: [],
  templateUrl: './dettaglio.html',
  styleUrl: './dettaglio.css'
})
export class Dettaglio {

  constructor(private rottaAttiva: ActivatedRoute){

  }

  ngOnInit(){
    this.rottaAttiva.params.subscribe(risultato => {
      console.log(risultato['matr'])
    })
  }

}
