import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeros(): Observable<Hero[]>{
    // of(HEROES)retorna um Observable<Hero[]>que emite um único valor ,
    //a matriz de heróis fictícios.

    const heroes = of(HEROES);

    return heroes;
  }
}
