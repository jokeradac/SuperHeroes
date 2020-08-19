import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  findHeroes: Heroe[];
  constructor( private heroeService: HeroesService,
               private routeService: Router) { }

  ngOnInit(): void {
  }

  buscarHeroe( termino: string): void{
    // this.findHeroes = this.heroeService.buscarHeroes(termino);
    this.routeService.navigate(['/busqueda', termino]);
  }

}
