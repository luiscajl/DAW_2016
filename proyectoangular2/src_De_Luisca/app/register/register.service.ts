import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Injectable} from 'angular2/core';
import {register} from './register.model';

@Injectable()
export class RegisterService{
  private registeruser = [
      new register('Luis Carlos','1234','1234','luisca@gmail.com'),
      new register('Paco','12345','12345','paco@gmail.com'),

    ];
  getUsers(){
    return this.registeruser;
  }

  saveUser(register:register){
    this.registeruser.push(register);
    console.log(this.registeruser);
  }

  getUser(nombre : string){
    for (let i = 0; i < this.registeruser.length; i++) {
        if(this.registeruser[i].nombre==nombre){return this.registeruser[i]};
    }
  }



}
