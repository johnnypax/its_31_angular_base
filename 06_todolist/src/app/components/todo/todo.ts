import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {

  elenco: string[] = []
  dafare?: string;

  salvataggio(): void{
    if(this.dafare)
      this.elenco.push(this.dafare);

    this.dafare = "";
  }

}
