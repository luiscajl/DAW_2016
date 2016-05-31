import {Injectable} from 'angular2/core';
import {register} from '../register/register.model.ts';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {receta} from '../creacionreceta/receta.model';
import {user} from './user.model';


@Injectable()
export class UserService{
  private user:user;
  private register:register;
  private seguidores=[];


  public usersperfil = [
      new user('luisca','IMG','IMG2',['frost','Paco']),
      new user('frost','IMG','IMG2',['luisca','Paco']),

      ];

  /*setUser(cUser:register){

    this.register=cUser;
    if(this.register!=undefined){
	    //this.usuario.addRecomendacion(new Recomendacion(this.usuario, "El mejor roguelike", 15000, "Este juego es el mejor roguelike que ha salido nunca", "The binding of isaac: Rebirth"));

  	}
  }*/
  getseguidores(user:string)
  {
    return this.user.seguidoresrecetas;
  }/*
  getCurrentUser(){
    return this.user;

  }*/

}
