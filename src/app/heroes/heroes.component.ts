import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
// é do tipo Hero
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    console.log('Heroes' + this.selectedHero);
    this.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

  getHeroes() {
   this.heroService.getHeros().subscribe(
      heroes => this.heroes=heroes
    );
  }
}
