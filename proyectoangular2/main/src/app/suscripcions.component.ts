import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component ({
  selector:'main-app',
  directives: [ROUTER_DIRECTIVES],
  templateUrl:'app/suscripcions.html',
  styleUrls:['app/css/suscripcions.css']
})
export class SuscripcionsComponent{}
