import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes.model';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

    hero: Hero = {
      id: 1,   
      name: "Homem-Aranha"   
    };

    heroes = HEROES;

    constructor() {}

    ngOnInit(): void {
      
    }
}
