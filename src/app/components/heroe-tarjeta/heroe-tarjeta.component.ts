import { Component, Input } from '@angular/core';
import { __param } from 'tslib';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrl: './heroe-tarjeta.component.css'
})
export class HeroeTarjetaComponent{

  @Input() heroe: any ={};
  @Input() index:number=0;
  constructor(private router:Router){}

  verHeroe(){
    this.router.navigate(['/heroe', this.index])
  }





}
