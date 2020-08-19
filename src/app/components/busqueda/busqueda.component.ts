import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  heroes: Heroe[];
  busqueda: string;
  constructor(private activatedRoute: ActivatedRoute, private routeService: Router, private heroesService: HeroesService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if ( params.cadena === '' ){
        this.busqueda = 'No se encontrarón coincidencias. ';
        this.heroes = [];
        return false;
      }
      this.heroes = this.heroesService.buscarHeroes(params.cadena);

      if ( this.heroes.length > 0 ){
        console.log(this.heroes);
        this.busqueda = 'Se encontron: ' + this.heroes.length + ' registros';
      }else{
        this.heroes = [];
        this.busqueda = 'No se encontrarón coincidencias. ';
      }
    });
  }
}
