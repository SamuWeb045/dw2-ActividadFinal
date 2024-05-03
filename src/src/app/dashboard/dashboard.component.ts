import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // Importa la interfaz Hero
import { HeroService } from '../hero.service'; // Importa el servicio HeroService

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html', // Plantilla HTML asociada al componente
  styleUrls: [ './dashboard.component.css' ] // Hojas de estilos CSS asociadas al componente
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []; // Arreglo de héroes para mostrar en el dashboard

  constructor(private heroService: HeroService) { } // Constructor del componente, inyecta el servicio HeroService

  ngOnInit(): void {
    this.getHeroes(); // Llama al método getHeroes() cuando el componente es inicializado
  }

  getHeroes(): void {
    this.heroService.getHeroes() // Llama al método getHeroes() del servicio HeroService
      .subscribe(heroes => this.heroes = heroes.slice(1, 5)); // Asigna solo los primeros 4 héroes al arreglo heroes
  }
}
