import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prova } from './prova/prova';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Prova],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('01_introduzione');
}
