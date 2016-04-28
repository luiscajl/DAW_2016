import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {user} from './user.model';
import {RegisterService} from '../register/register.service';
import {RegisterComponent} from '../register/register.component';
import {register} from '../register/register.model';


@Component({
  selector: 'user',
  templateUrl: 'app/user/user.component.html',
})

export class UserComponent {
 usuario: register;
  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: RegisterService) {
        let nombre = routeParams.get('nombre');
        this.usuario = service.getUser(nombre);

}
}
