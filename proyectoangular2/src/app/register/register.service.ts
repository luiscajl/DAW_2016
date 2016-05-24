import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Injectable} from 'angular2/core';
import {register} from './register.model';
import {withObserver} from '../utils';


@Injectable()
export class RegisterService{
  private register:register;
  public registeruser = [
      new register('Luis Carlos','1234','1234','luisca@gmail.com','Pinche de cocina', 'Nuevo usuario', 'img/userpic.png','img/food.jpg'),
      new register('Paco','12345','12345','paco@gmail.com','Chef', 'Nuevo usuario', 'img/userpic.png','img/food.jpg'),
      new register('frost','1234','12345','paco@gmail.com', 'Maestro de los fogones','Nuevo usuario', 'img/userpic.png','img/food.jpg'),
      new register('luisca','1234','12345','paco@gmail.com', 'Maestro de los fogones','Nuevo usuario', 'img/userpic.png','img/food.jpg')

    ];
  getUsers(){
    return this.registeruser;

  }

  saveUser(register:register){
    this.registeruser.push(register);
    console.log(this.registeruser);
    console.log(this.getUsers());
    //return withObserver(usuario);
  }

  getUser(nombre: string) {
    let user = this.registeruser.filter(h => h.nombre === nombre)[0]
    return withObserver(new register(user.nombre, user.contrasenia, user.repiticioncontrasenia, user.correousuario, user.rango, user.bio, user.fotoperfil, user.fotobanner));
  }

  setUser(Cregister:register){
      this.register=Cregister;
      if(this.registeruser!=undefined){
          //this.usuario.mentoresSiguiendo[4].addRecomendacion(new Recomendacion(this.usuario.mentoresSiguiendo[4], "El cooperativo definitivo", 15000, "Matar zombies en familia siempre es un gustazo. Y mas con machete","Left 4 dead 2"));
    	}
    }
   getCurrentUser(){
   return this.register;
    }
   getCurrentUserlogin()
   {
     console.log("Ha entrado");
     return this.register.nombre;

   }



}
