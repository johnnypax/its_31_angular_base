import { Routes } from '@angular/router';
import { Inserisci } from './components/inserisci/inserisci';
import { Elenca } from './components/elenca/elenca';

export const routes: Routes = [
    { path: "", redirectTo: "elenca", pathMatch: "full"},
    { path: "inserisci", component: Inserisci },
    { path: "elenca", component: Elenca}

];
