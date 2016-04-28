import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {register} from './register.model';
import {RegisterService} from './register.service';

@Component({
  selector: 'register',
  templateUrl: 'app/register/register.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers:[RegisterService]
})

export class RegisterComponent {
  newUser: boolean;
  register: register;

  constructor(private RegisterServic : RegisterService,private _routeParams:RouteParams){

  }


  ngOnInit(){
    let nombre=this._routeParams.get("nombre");
    this.RegisterServic.getUser(nombre).subscribe(
      register => this.register = register,
      error => console.log(error)
    )
  }



  cancel() {
    window.history.back();
  }

  save() {
    this.RegisterServic.saveUser(this.register);
    window.history.back();
  }
}
