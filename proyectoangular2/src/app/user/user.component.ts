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
  user:register;
 register: register;
 public nusuario: register;
 private textoSeguir;
 recetuser:receta[];
 usuarioactivo:string;
 contador:number;
 numeroseguidores:number;
 seguidores=[];
 nombreusuario:string;


 constructor(private RegisterServic : RegisterService,private _routeParams:RouteParams,private router: Router, private recetaser :RecetaService,private userservi :UserService){
  this.register =this.RegisterServic.getCurrentUser();
  this.usuarioactivo =this.RegisterServic.getCurrentUser().nombre;
  this.textoSeguir = "Seguir"


}

ngOnInit(){
let nombre=this._routeParams.get("nombre");
this.nombreusuario=this._routeParams.get("nombre");
    this.RegisterServic.getUser(nombre).subscribe(register => this.register = register,error => console.log(error)
  )
  //this.recetuser=this.recetaser.getrecetasparaelusuario(nombre);
  this.setrango(nombre);
  this.contador=this.recetaser.getnumerorecetasuser(nombre);
  this.calcularseguidores();
  this.ponerrecetas(nombre);
  for(var seguidor of this.userservi.getseguidores(this.userservi.getCurrentUser().nombre)){
    if(this.register.nombre == seguidor){
      this.textoSeguir = "Siguiendo"
    }

  }

}
  ponerrecetas(nombre:string)
  {
    this.recetuser=this.recetaser.getrecetasparaelusuario(nombre);

  }
  gotocontrolpanel(){
    this.nusuario = this.RegisterServic.getCurrentUser();
    console.log(this.nusuario);
    let link = ['Control'];
    this.router.navigate(link);
  }
  userseguir()
  {
    for (var usu of this.seguidores){
      if (usu==this.register)
      {
          return true;
      }

    }

  }
  seguirusuario(registernombre:string)
  {
if(this.textoSeguir == "Siguiendo"){
  this.userservi.deleteSeguidor(registernombre);
  this.textoSeguir = "Seguir";

}else{

this.userservi.addSeguidor(registernombre);
this.textoSeguir = "Siguiendo";

}
console.log(this.userservi.getseguidores(this.userservi.getCurrentUser().nombre));


  }
  calcularseguidores(){
    this.numeroseguidores=0;
    this.seguidores=this.userservi.getseguidores(this.nombreusuario);
    for (var usu of this.seguidores){
      this.numeroseguidores=this.numeroseguidores+1;


  }}
  limpiarrecetas(){
    this.recetuser=[];
  }
  setrango(nombre:string)
  {
    if (this.recetaser.getnumerorecetasuser(nombre)>2){
        this.register.rango='Pinche de cocina';
    if (this.recetaser.getnumerorecetasuser(nombre)>4){
        this.register.rango='Chef que sabe hacer algo';
    if (this.recetaser.getnumerorecetasuser(nombre)>8){
        this.register.rango='Maestro de la cocina';}
    if (this.recetaser.getnumerorecetasuser(nombre)<=1){
          this.register.rango='No sabes ni hacer un huevo frito';}
  }
}


}}
