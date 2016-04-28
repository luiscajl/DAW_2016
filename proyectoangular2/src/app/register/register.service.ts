import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Injectable} from 'angular2/core';
import {register} from './register.model';
import {withObserver} from '../utils';

@Injectable()
export class RegisterService{

  private registeruser = [
      new register('Luis Carlos','1234','1234','luisca@gmail.com'),
      new register('Paco','12345','12345','paco@gmail.com'),
      new register('frost','1234','12345','paco@gmail.com'),

    ];
  getUsers(){
    return this.registeruser;
  }

  saveUser(register:register){
    this.registeruser.push(register);
    console.log(this.registeruser);
  }

  getUser(nombre: string) {
    let user = this.registeruser.filter(h => h.nombre === nombre)[0]
    return withObserver(new register(user.nombre, user.contrasenia, user.repiticioncontrasenia, user.correousuario));
  }



}
