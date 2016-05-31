import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Injectable} from 'angular2/core';
import {comentario} from './comentario.model';
import {withObserver} from '../utils';

@Injectable()
export class ComentarioService{

  private comentarios = [

    ];
  getRecetas(){

      return this.comentarios;

  }

  saveComentario(comentario:comentario){
    this.comentarios.push(comentario);
   //console.log(this.comentarios);
    //return withObserver(usuario);
  }





}
