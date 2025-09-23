import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Uno } from './uno/uno';
import { Due } from './due/due';

@Component({
  selector: 'app-root',
  imports: [Uno, Due],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(){
    console.log("Sono il costruttore di App.ts")

    let a = 5;
    let b = 7;
    let somma = a + b;

    console.log(somma);
  }

}
