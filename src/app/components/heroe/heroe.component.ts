import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl:'./heroe.component.css'
})
export class HeroeComponent {

  heroe:any ={

  }

  constructor( private activedRoute:ActivatedRoute,
               private _heroesService: HeroesService){

    this.activedRoute.params.subscribe( params =>{
        this.heroe = this._heroesService.getHeroe(params['id']);
    })

  }

}
