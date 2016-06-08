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
  private siguiendo: boolean;


  public usersperfil = [
      new user('luisca','IMG','IMG2',['frost']),
      new user('frost','IMG','IMG2',['Paco']),
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

  addSeguidor(seguidor:string){
    this.user.seguidoresrecetas.push(seguidor);


  }

  deleteSeguidor(seguidor:string){
    for(var seguid of this.user.seguidoresrecetas){
      if (seguid = seguidor){
        var index = this.user.seguidoresrecetas.indexOf(seguidor);   
        this.user.seguidoresrecetas.splice(index, 1);

      }
    }
  }

  estaSiguiendo(user: string){
    for (var usu of this.usersperfil){
        for(var seguidor of usu.seguidoresrecetas){
            if(seguidor == user){

              this.siguiendo = true;
            }

        }

    }


  }


}
