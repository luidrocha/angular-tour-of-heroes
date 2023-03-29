import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
// é do tipo Hero
  selectedHero?: Hero;

  constructor(private heroService: HeroService,
              private messageService:MessageService) {}

  ngOnInit() {

    this.getHeroes()
  }

// Não esta sendo usado mais devido a utilização de rotas
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.addMessage(`HeroesComponent: Selected hero id:${hero.id}`);
  }

  getHeroes() {
   this.heroService.getHeros().subscribe(
      heroes => this.heroes=heroes
    );
  }
}
