import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Injectable} from 'angular2/core';
import {receta} from './receta.model';
import {withObserver} from '../utils';

@Injectable()
export class RecetaService{

  private recetas = [
     //new receta("Tarta","17/02/2016"," Esta receta de tarta de queso fría es una receta que es más habitual encontrar en los últimos tiempos que la tarta de queso de toda la vida, la que se hace con horno. Cada una tiene una textura diferente, ya que mientras la tradicional es más como un bizcocho esponjoso y húmedo, esta tarta de queso fría es más cremosa y tiene una base más bien crujiente hecha a base de galletas.","Diabéticos / Bajo en grasa","facil","30 minutos","Frost","Pollo, Aceite, Sal, Perejil","Se corta la cebolla en juliana, el pimiento a tiras y el champiñón laminado y se sofríe. Cuando este sofrito se agrega la guindilla y la harina y se fríe un poco, se agrega el pollo se marea hasta que coja temperatura. Cuando este todo bien mareado se le echa el vino, la sal pimienta recién molida, pimentón dulce y orégano. Se mueve todo bien y dejar hervir a fuego medio para que se evapore el alcohol.")

    ];
  getRecetas(){

      return this.recetas;

  }

  saveReceta(receta:receta){
    this.recetas.push(receta);
    console.log(this.recetas);
    //return withObserver(usuario);
  }

  getReceta(nombre: string) {
    let rceta = this.recetas.filter(h => h.nombre === nombre)[0]
    return withObserver(new receta(rceta.nombre,rceta.fecha,rceta.descripcion,rceta.infoextra,rceta.dificultad,rceta.tiempo,rceta.autor,rceta.ingredientes,rceta.pasos,rceta.video,rceta.vegana,rceta.grasas,rceta.diabeicos,rceta.picante));
  }



}
