import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
// Este é um exemplo de um cenário típico de serviço em serviço no qual você injeta o MessageService no
//HeroServiceque é injetado no HeroesComponent.

  constructor(private messageService: MessageService) { }

  getHeros(): Observable<Hero[]>{
    // of(HEROES)retorna um Observable<Hero[]>que emite um único valor ,
    //a matriz de heróis fictícios.

    const heroes = of(HEROES);
    this.messageService.addMessage('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id:number) : Observable<Hero>{

    const hero = HEROES.find(h => h.id = id)!;
    //Os caracteres crase ( `) definem um JavaScript modelo literal para incorporar o id.
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
