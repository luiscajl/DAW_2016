import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {ingredientesComponent} from './ingredientes.component'
import {RecetaService} from '../creacionreceta/receta.service';
import {receta} from '../creacionreceta/receta.model';

@Component({
  selector: 'inicioo',
  providers: [],
  templateUrl: './app/inicio/inicio.component.html',
  directives: [ingredientesComponent],
  pipes: []
})


export class iniciocomponent {
  private recetas:receta[];
  constructor (private router: Router,private recetaservice:RecetaService){
    this.recetas=this.recetaservice.getRecetas();

  }



  }
