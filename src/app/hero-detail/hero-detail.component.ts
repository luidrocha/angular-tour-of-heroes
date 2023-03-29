import { Component,Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  // Recebe o hero do evento SelectedHero
  @Input() hero? : Hero;


  //O ActivatedRoutecontém informações sobre a rota para esta instância do arquivo HeroDetailComponent. Este componente está interessado nos parâmetros da rota extraídos da URL. O parâmetro "id" é o iddo herói a ser exibido.
  //O HeroServiceobtém os dados do herói do servidor remoto e este componente os usa para exibir o herói.
  //O locationé um serviço Angular para interagir com o navegador. Este serviço permite navegar de volta para a visualização anterior.
  constructor( private router: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) { }

  ngOnInit(): void {
   this.getHero();
  }

  getHero(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(
      hero => this.hero = hero);

  }

  goBack(): void {

    this.location.back();
  }

}
