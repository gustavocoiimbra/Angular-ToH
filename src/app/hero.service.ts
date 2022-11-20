import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HEROES} from './mock-heroes';
import { Hero } from './heroes.model';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private heroUrl = 'api/heroes';

  constructor(private messageService: MessageService, 
    private htpp: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.htpp.get<Hero[]>(this.heroUrl);


    // const heroes = of(HEROES);
    // this.log('fetched heroes');
    // return heroes;
  }

  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(hero => hero.id === id)!;
    this.log(`fetched hero id=${id}`);
    return of(hero);
  }

  private log(message: string): void {
    this.messageService.add(`HeroesService: ${message}`)
  }

}
