import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {register} from './register.model';
import {RegisterService} from './register.service';

@Component({
  selector: 'register',
  templateUrl: 'app/register/register.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class RegisterComponent {
  newUser: boolean;
  register: register;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: RegisterService){


        this.register = new register('','','','');
        this.newUser = true;
      
  }

  cancel() {
    window.history.back();
  }

  save() {
    this.service.saveUser(this.register);
    window.history.back();
  }
}
