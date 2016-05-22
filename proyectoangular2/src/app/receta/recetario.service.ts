import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Injectable} from 'angular2/core';
import {recetario} from './recetario.model';


@Injectable()
export class RecetarioService{

  public recetario= [
      new recetario('Luis Carlos','1234','1234','luisca@gmail.com','Pinche de cocina', 'Nuevo usuario', 'img/userpic.png','img/food.jpg'),
      new recetario('Paco','12345','12345','paco@gmail.com','Chef', 'Nuevo usuario', 'img/userpic.png','img/food.jpg'),
      new recetario('frost','1234','12345','paco@gmail.com', 'Maestro de los fogones','Nuevo usuario', 'img/userpic.png','img/food.jpg'),

    ];

}
