import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HEROES} from './mock-heroes';
import { Hero } from './heroes.model';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);

    return heroes;
  }
}
