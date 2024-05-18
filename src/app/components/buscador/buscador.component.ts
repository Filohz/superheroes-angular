import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl:'./buscador.component.css'
})
export class BuscadorComponent implements OnInit {

  heroes:any[] =[]
  texto:string='';

  constructor(private activedRoute:ActivatedRoute,
              private heroesService:HeroesService){
  }

  ngOnInit(){
    this.activedRoute.params.subscribe(params => {
      this.texto=params['texto'];
      this.heroes = this.heroesService.buscarHeroes(this.texto);

    })

  }


}
