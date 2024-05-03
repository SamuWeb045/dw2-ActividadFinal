import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Importa Observable y el operador 'of' desde RxJS
import { Hero } from './hero'; // Importa la interfaz Hero
import { HEROES } from './mock-heroes'; // Importa la lista de héroes simulada
import { MessageService } from './message.service'; // Importa el servicio MessageService

@Injectable({
  providedIn: 'root', // Indica que este servicio está disponible en toda la aplicación
})
export class HeroService {
  constructor(private messageService: MessageService) { } // Constructor del servicio, inyecta MessageService

  // Método para obtener todos los héroes
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); // Convierte la lista de héroes en un Observable
    this.messageService.add('Colección: obteniendo guitarra.'); // Agrega un mensaje al servicio MessageService
    return heroes; // Devuelve el Observable que emite la lista de héroes
  }

  // Método para obtener un héroe por su ID
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!; // Encuentra el héroe con el ID proporcionado
    this.messageService.add(`Colección: Id de Guitarra = ${id}`); // Agrega un mensaje al servicio MessageService
    return of(hero); // Devuelve un Observable que emite el héroe encontrado
  }
}
