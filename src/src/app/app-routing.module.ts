import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component'; // Importa el componente DashboardComponent
import { HeroesComponent } from './heroes/heroes.component'; // Importa el componente HeroesComponent
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // Importa el componente HeroDetailComponent

// Define las rutas de la aplicación
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Ruta por defecto: redirige a la ruta '/dashboard'
  { path: 'dashboard', component: DashboardComponent }, // Ruta para el componente DashboardComponent
  { path: 'detail/:id', component: HeroDetailComponent }, // Ruta para el componente HeroDetailComponent con un parámetro dinámico ':id'
  { path: 'heroes', component: HeroesComponent } // Ruta para el componente HeroesComponent
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], // Importa las rutas definidas anteriormente y configura el enrutador principal de la aplicación
  exports: [ RouterModule ] // Exporta el módulo de enrutamiento para que pueda ser utilizado por otros módulos de la aplicación
})
export class AppRoutingModule {} // Exporta el módulo de enrutamiento como una clase llamada AppRoutingModule
