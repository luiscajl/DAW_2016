import {Component,Input,Output,EventEmitter} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {RegisterService} from '../register/register.service';
import {RegisterComponent} from '../register/register.component';
import {register} from '../register/register.model';


@Component({
       selector: 'login', // mirar que es selector
       templateUrl: '../inicio/inicio.component.html',
})
export class LoginComponent{
  private registros : register[];

  constructor ( private _router:Router, routeParams:RouteParams, private service: RegisterService)
    {

  }
  ngOnInit(){
    this.registros = this.service.getUsers();
    console.log(this.registros);
  }



}
