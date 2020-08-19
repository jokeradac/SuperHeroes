import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;
  isDC = false;
  isMarvel = false;
  constructor(private activatedRoute: ActivatedRoute,
              private heroeService: HeroesService
     ) {

    this.activatedRoute.params.subscribe( params => {
      this.heroe = heroeService.getHeroe(params.id);
    });
  }

  ngOnInit(): void {
    if (this.heroe.casa === 'DC'){this.isDC = true; }
    else {this.isMarvel = true; }
  }

}
