import {Injectable} from 'angular2/core';
import {register} from '../register/register.model.ts';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {receta} from '../creacionreceta/receta.model';
import {user} from './user.model';
import {RegisterService} from '../register/register.service';


@Injectable()
export class UserService{
  private user:user;
  private register:register;
  private seguidores=[];


  public usersperfil = [
      new user('luisca','IMG','IMG2',['frost']),
      new user('frost','IMG','IMG2',['luisca','Paco']),
      new user('mozilla','IMG','IMG2',['frost']),

      ];

  setUser(cUser:user){
    this.user=cUser;

  }
  getUsers(){
    return this.usersperfil;

  }
  getseguidores(userr:string)
  {
    for (var usu of this.usersperfil){
        if(usu.nombre==userr){
          //console.log(this.getCurrentUser());
          //console.log(this.user);
          return this.user.seguidoresrecetas;
    }}
  }
  getCurrentUser(){
    return this.user;

  }


}
