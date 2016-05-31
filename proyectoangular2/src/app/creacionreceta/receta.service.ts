import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Injectable} from 'angular2/core';
import {receta} from './receta.model';
import {withObserver} from '../utils';
import {comentario} from '../receta/comentario.model';
import {register} from '../register/register.model';

@Injectable()
export class RecetaService{
  receta:receta;
  user:register;
  contadornumerorecetas:number;
  //contadornumerorecetas=0;
  recetitas:receta[];

  private recetas = [
     //new receta("Tarta","17/02/2016"," Esta receta de tarta de queso fría es una receta que es más habitual encontrar en los últimos tiempos que la tarta de queso de toda la vida, la que se hace con horno. Cada una tiene una textura diferente, ya que mientras la tradicional es más como un bizcocho esponjoso y húmedo, esta tarta de queso fría es más cremosa y tiene una base más bien crujiente hecha a base de galletas.","Diabéticos / Bajo en grasa","facil","30 minutos","Frost","Pollo, Aceite, Sal, Perejil","Se corta la cebolla en juliana, el pimiento a tiras y el champiñón laminado y se sofríe. Cuando este sofrito se agrega la guindilla y la harina y se fríe un poco, se agrega el pollo se marea hasta que coja temperatura. Cuando este todo bien mareado se le echa el vino, la sal pimienta recién molida, pimentón dulce y orégano. Se mueve todo bien y dejar hervir a fuego medio para que se evapore el alcohol.")
     new receta('Macarrones','22/05/2016','Una receta muy sencilla pa crear unos macarrones','','Facil','30 minutos',new register('luisca','1234','12345','paco@gmail.com', 'Maestro de los fogones','Nuevo usuario', 'img/userpic.png','img/food.jpg'),["Tomate","Macarrones"],["La metemos al micro","Y lo sacamos del micro"],'',false,false,false,false,[]),
     new receta('Pizza','22/05/2016','Una receta para hacer una pizza muy hermosa','','Tirao','20 minutos',new register('luisca','1234','12345','paco@gmail.com', 'Maestro de los fogones','Nuevo usuario', 'img/userpic.png','img/food.jpg'),[],[],'',false,false,false,false,[])



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
    return withObserver(new receta(rceta.nombre,rceta.fecha,rceta.descripcion,rceta.infoextra,rceta.dificultad,rceta.tiempo,rceta.autor,rceta.ingredientes,rceta.pasos,rceta.video,rceta.vegana,rceta.grasas,rceta.diabeticos,rceta.picante,rceta.comentarios));
  }
  getrecetasuser(usuario:string)
  {
    //let recetas=this.recetas.filter(h=>h.autor.nombre ===autor)
    for (var recetas of this.recetas)
    {
      console.log(this.recetas);
      if (recetas.autor.nombre==usuario){
        return this.recetas;

      }
    }
    }
  getnumerorecetasuser(usuario:string){
      this.contadornumerorecetas=0;
      for (var recetita of this.recetas)
      {
        if (recetita.autor.nombre==usuario){
          this.contadornumerorecetas=this.contadornumerorecetas+1;
          
        }
      }
      return this.contadornumerorecetas;

  }

  addComentario(comentario:comentario){
      this.receta.comentarios.push(comentario);
  }
  editreceta(receta:receta)
  {


  }

  getComentarios(){
    return this.receta.comentarios;

  }


}
