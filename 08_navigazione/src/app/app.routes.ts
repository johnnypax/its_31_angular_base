import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Chisiamo } from './components/chisiamo/chisiamo';
import { Contatti } from './components/contatti/contatti';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: 'full'},
    { path: "home", component: Home },
    { path: "chi-siamo", component: Chisiamo },
    { path: "contattaci", component: Contatti },
];
