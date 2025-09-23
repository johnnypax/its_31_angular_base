import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './components/todo/todo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Todo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('06_todolist');
}
