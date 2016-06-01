import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {RecetaService} from '../creacionreceta/receta.service';
import {UserService} from '../user/user.service';
import {receta} from '../creacionreceta/receta.model';
import {register} from '../register/register.model';


@Component({
  selector: 'suscripcioness',
  providers: [],
  templateUrl: './app/suscripciones/suscripciones.component.html',
  directives: [],
  pipes: []
})


export class suscripcionescomponent {
  recetas: receta[];
  seguidores: register[];
  constructor (private router: Router, private RecetaService:RecetaService, private UserService: UserService ){
    this.seguidores=this.UserService.getseguidores(this.UserService.getCurrentUser().nombre);
    //console.log(this.seguidores);
       for (var user of this.seguidores){
        for(var receta of  RecetaService.getrecetasuser(user.nombre)) {
          this.recetas.push(receta);
      }

      }


  }
  }
