import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {user} from './user.model';
import {RegisterService} from '../register/register.service';
import {RegisterComponent} from '../register/register.component';
import {register} from '../register/register.model';
import {UserService} from './user.service';
import {RecetaService} from '../creacionreceta/receta.service';
import {receta} from '../creacionreceta/receta.model';


@Component({
  selector: 'user',
  templateUrl: 'app/user/user.component.html',

})

export class UserComponent {
 register: register;
 public nusuario: register;
 recetauser:receta[];
 usuarioactivo:string;
 contador:number;
 numeroseguidores=0;
 seguidores=[];

 constructor(private RegisterServic : RegisterService,private _routeParams:RouteParams,private router: Router, private recetaser :RecetaService,private userservi :UserService){
  this.register =this.RegisterServic.getCurrentUser();
  this.usuarioactivo =this.RegisterServic.getCurrentUser().nombre;
  this.recetauser=this.recetaser.getrecetasuser(this.usuarioactivo);
  this.setrango();
  this.contador=this.recetaser.getnumerorecetasuser(this.register.nombre);
  this.calcularseguidores();


}

ngOnInit(){
  let nombre=this._routeParams.get("nombre");
  console.log(nombre);
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
  calcularseguidores(){
    this.seguidores=this.userservi.getseguidores(this.userservi.getCurrentUser().nombre);
    for (var usu of this.seguidores){
      this.numeroseguidores=this.numeroseguidores+1;


  }}
  setrango()
  {
    if (this.recetaser.getnumerorecetasuser(this.register.nombre)>1){

        this.register.rango='Pinche de cocina';

  }
}


}
