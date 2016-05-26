import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {user} from './user.model';
import {RegisterService} from '../register/register.service';
import {RegisterComponent} from '../register/register.component';
import {register} from '../register/register.model';
import {CurrentUserService} from './user.service';


@Component({
  selector: 'user',
  templateUrl: 'app/user/user.component.html',
  providers:[RegisterService,CurrentUserService]
})

export class UserComponent {
 register: register;
 public nusuario: register;

 constructor(private RegisterServic : RegisterService,private _routeParams:RouteParams,private router: Router,private userservice:CurrentUserService){



}

ngOnInit(){
  let nombre=this._routeParams.get("nombre");
  this.RegisterServic.getUser(nombre).subscribe(
    register => this.register = register,
    error => console.log(error)
  )

}
  gotocontrolpanel(){
    this.nusuario = this.RegisterServic.getCurrentUser();
    console.log(this.nusuario);
    let link = ['Control'];
    this.router.navigate(link);
  }


}
