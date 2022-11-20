import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../heroes.model';
import { HEROES } from '../mock-heroes';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

    heroes: Hero[] = [];
    SelectedHero?: Hero;

    constructor(private heroService: HeroService, 
      private messageService: MessageService) {}

    ngOnInit(): void {
      this.getHeroes();
    }

    getHeroes(): void {
      this.heroService.getHeroes().subscribe(heroes => 
        this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.SelectedHero = hero;
        this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    }
}
