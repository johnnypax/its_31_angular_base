import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Visualizzazione } from './components/visualizzazione/visualizzazione';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Visualizzazione],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('05_scambio');
}
