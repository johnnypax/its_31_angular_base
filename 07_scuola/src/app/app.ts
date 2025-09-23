import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Gestione } from './components/gestione/gestione';
import { Studente } from './classes/studente';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Gestione],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
