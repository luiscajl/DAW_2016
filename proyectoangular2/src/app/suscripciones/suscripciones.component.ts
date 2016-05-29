import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {RecetaService} from '../creacionreceta/receta.service';
import {receta} from '../creacionreceta/receta.model';


@Component({
  selector: 'suscripcioness',
  providers: [],
  templateUrl: './app/suscripciones/suscripciones.component.html',
  directives: [],
  pipes: []
})


export class suscripcionescomponent {
  recetas: receta[];
  constructor (private router: Router, private RecetaService:RecetaService ){
    this.recetas = RecetaService.getRecetas();

  }
  }
