import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  ngOnInit(): void {
    console.log('Heroes' + this.selectedHero);
  }

  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  onInit() {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

  getHeroes() {
    this.heroes = this.heroService.getHeros();
  }
}
