import { Component, OnInit } from '@angular/core';
import { Hero } from '../ihero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
}
