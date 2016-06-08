import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {RecetaService} from '../creacionreceta/receta.service';
import {UserService} from '../user/user.service';
import {receta} from '../creacionreceta/receta.model';
import {register} from '../register/register.model';
import {RegisterService} from '../register/register.service';


@Component({
  selector: 'suscripcioness',
  providers: [],
  templateUrl: './app/suscripciones/suscripciones.component.html',
  directives: [],
  pipes: []
})

export class suscripcionescomponent {
  recetastodosusuarios: receta[];
  seguidores: string[];
  recetitas:receta[];
  liandola:receta[];
  textoseguir:string;

  constructor (private router: Router, private recetase:RecetaService, private UserService: UserService , private RegisterService:RegisterService){
    this.liandola = [];
    this.recetastodosusuarios = [];
    this.seguidores = [];
    this.recetitas = [];

    this.textoseguir = "Siguiendo";
    this.seguidores=this.UserService.getseguidores(this.UserService.getCurrentUser().nombre);
    this.liandola=this.recetase.getrecetasuser(this.seguidores);
        //  console.log(this.recetase.getrecetasuser(user))

      for(var receta of  this.liandola) {
        //console.log("Entrando en el segundo for :" +this.liandola);
            //console.log(this.recetastodosusuarios);
            //console.log("Esta dentro de la llamada de el segundo for y ha ejecutado a recetastodosusuarios y no ejecutado el push");
            this.recetastodosusuarios.push(receta);
          //  console.log(this.recetastodosusuarios);

          }


}

  ngOnInit(){

  }





gotouserdelareceta(usuariodelareceta:string)
        {
            this.router.navigate(['User', { nombre: usuariodelareceta }]);
        }

seguirUser(usuariodelareceta:string){
        //  this.UserService.addSeguidor(usuariodelareceta);
          ///this.textoseguir = "Siguiendo";

        }



}
