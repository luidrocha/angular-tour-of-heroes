import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})

export class HeroesComponent implements OnInit   {

  ngOnInit(): void {

    console.log('Heroes' + this.selectedHero);
  }

heroes = HEROES;

  selectedHero?: Hero;

  onInit(){

  }

  onSelect(hero:Hero):void {

    this.selectedHero=hero;
    console.log(this.selectedHero);
  }



};

