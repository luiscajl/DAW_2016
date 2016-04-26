import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {ingredientesComponent} from './ingredientes.component'

@Component({
  selector: 'inicioo',
  providers: [],
  templateUrl: './app/inicio/inicio.component.html',
  directives: [ingredientesComponent],
  pipes: []
})


export class iniciocomponent {
  constructor (private router: Router){}
  }
