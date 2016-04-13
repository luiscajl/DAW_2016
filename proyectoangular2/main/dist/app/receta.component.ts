import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component ({
  selector:'main-app',
  directives: [ROUTER_DIRECTIVES],
  templateUrl:'app/receta.html',
  styleUrls:['app/css/recetas.css']
})
export class RecetaComponent{}
