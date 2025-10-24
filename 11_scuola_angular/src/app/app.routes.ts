import { Routes } from '@angular/router';
import { Inserisci } from './components/inserisci/inserisci';
import { Elenca } from './components/elenca/elenca';
import { Dettaglio } from './components/dettaglio/dettaglio';

export const routes: Routes = [
    { path: "", redirectTo: "elenca", pathMatch: "full"},
    { path: "inserisci", component: Inserisci },
    { path: "elenca", component: Elenca},
    { path: "dettaglio/:matr", component: Dettaglio}
];
