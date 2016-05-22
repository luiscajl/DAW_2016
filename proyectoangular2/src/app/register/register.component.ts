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
  usuario: register;

  constructor(private RegisterServic : RegisterService,private _routeParams:RouteParams){
    let nombre=this._routeParams.get("nombre");
    if(nombre){
    this.RegisterServic.getUser(nombre).subscribe(
      register => this.usuario = register,
      error => console.log(error)
    )

  }else{
    this.usuario = new register('','','','','Pinche de cocina','Nuevo usuario','img/userpic.png','img/food.jpg');

  }
  }



  cancel() {
    window.history.back();
  }

  save() {


    this.RegisterServic.saveUser(this.usuario);
    window.history.back();
  }
}
