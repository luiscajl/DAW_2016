import {Injectable} from 'angular2/core';
import {register} from '../register/register.model.ts';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {receta} from '../creacionreceta/receta.model';


@Injectable()
export class UserService{
  private receta:receta;
  private usuario:register;

  setUser(cUser:register){

    this.usuario=cUser;
    if(this.usuario!=undefined){
	    //this.usuario.addRecomendacion(new Recomendacion(this.usuario, "El mejor roguelike", 15000, "Este juego es el mejor roguelike que ha salido nunca", "The binding of isaac: Rebirth"));

  	}
  }
  getCurrentUser(){
    return this.usuario;

  }

}
