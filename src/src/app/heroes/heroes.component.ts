import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'; //Importamos el mock HEROES 
import { HeroService } from '../hero.service'; // Importa el servicio HeroService
import { MessageService } from '../message.service'; // Importa el servicio MessageService


//Agregamos una propieda hero llamado Windstorm
//Eliminamos hero id y name de la clase HeroesComponent
//Agregamos COnstructor

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

/*
export class HeroesComponent implements OnInit {
    
    heroes = HEROES;
    selectedHero: Hero | undefined;
  
    constructor() { }
  
    ngOnInit() {
    }
    
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }
  }
  */

  export class HeroesComponent implements OnInit {

    selectedHero?: Hero; // Propiedad que almacena el héroe seleccionado
    heroes: Hero[] = []; // Arreglo de héroes
  
    constructor(private heroService: HeroService, private messageService: MessageService) { } // Constructor del componente
  
    ngOnInit(): void {
      this.getHeroes(); // Llama al método getHeroes() cuando el componente es inicializado
    }
  
    onSelect(hero: Hero): void {
      this.selectedHero = hero; // Asigna el héroe seleccionado a la propiedad selectedHero
      this.messageService.add(`Componente Colección: Guitarra seleccionado con Id=${hero.id}`); // Agrega un mensaje al servicio MessageService
    }
  
    getHeroes(): void {
      this.heroService.getHeroes() // Llama al método getHeroes() del servicio HeroService
          .subscribe(heroes => this.heroes = heroes); // Asigna los héroes obtenidos del servicio al arreglo heroes
    }
  }