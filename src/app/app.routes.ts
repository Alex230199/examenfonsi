import { Routes } from '@angular/router';
import { Menu } from './components/menu/menu';
import { Pista} from './components/pista/pista';
import { Saludo } from './components/saludo/saludo';


export const routes: Routes = [

    { path: 'menu', component: Menu},
    { path: 'pista', component: Pista},
    { path: 'saludo', component: Saludo},


];
