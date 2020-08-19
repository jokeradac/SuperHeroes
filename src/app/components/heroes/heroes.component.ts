import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];
  constructor(private heroesService: HeroesService, private routeService: Router) {  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  // tslint:disable-next-line: typedef
  verHeroe(idx: number){
    this.routeService.navigate(['/heroe', idx]);
  }

}
