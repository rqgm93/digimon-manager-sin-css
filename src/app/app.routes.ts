import { Routes } from '@angular/router';
import { DigimonListComponent } from './digimon-list/digimon-list.component';
import { DigimonAddComponent } from './digimon-add/digimon-add.component';
import { DigimonDetailComponent } from './digimon-detail/digimon-detail.component';

export const routes: Routes = [
    { path: 'list', component: DigimonListComponent },  // Ruta para listar los Digimons
    { path: 'add', component: DigimonAddComponent },   // Ruta para agregar un nuevo Digimon
    {path: 'digimon/:id', component: DigimonDetailComponent},
    { path: '', redirectTo: '/list', pathMatch: 'full' }, // Ruta por defecto
    { path: '**', redirectTo: '/list' }  // Redirige cualquier ruta no válida
];
