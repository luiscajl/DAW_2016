import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Injectable} from 'angular2/core';
import {receta} from './receta.model';
import {withObserver} from '../utils';
import {comentario} from '../receta/comentario.model';
import {register} from '../register/register.model';
import {user} from '../user/user.model';

@Injectable()
export class RecetaService{
  receta:receta;
  user:register;
  contadornumerorecetas:number;
  recetasuser: receta[]=[];
  recetasuserparaelusuario: receta[]=[];

  private recetas = [
     new receta('Macarrones','22/05/2016','Una receta muy sencilla pa crear unos macarrones','','Facil','30 minutos',new register('luisca','1234','12345','paco@gmail.com', 'Maestro de los fogones','Nuevo usuario', 'img/userpic.png','img/food.jpg'),["Tomate","Macarrones"],["La metemos al micro","Y lo sacamos del micro"],'',false,false,false,false,[],"../../img/pollorelleno.jpg"),
     new receta('Pizza','22/05/2016','Una receta para hacer una pizza muy hermosa','','Tirao','20 minutos',new register('luisca','1234','12345','paco@gmail.com', 'Maestro de los fogones','Nuevo usuario', 'img/userpic.png','img/food.jpg'),[],[],'',false,false,false,false,[],"../../img/pos.jpg"),
     new receta('Pollo pepitoria','21/05/2016','Una receta muy sencilla pa crear unos macarrones','','Facil','30 minutos',new register('luisca','1234','12345','paco@gmail.com', 'Maestro de los fogones','Nuevo usuario', 'img/userpic.png','img/food.jpg'),["Tomate","Macarrones"],["La metemos al micro","Y lo sacamos del micro"],'',false,false,false,false,[],"../../img/car.jpg"),
     new receta('Ensalada de lechuga','24/05/2016','Una receta muy sencilla pa crear unos macarrones','','Facil','30 minutos',new register('luisca','1234','12345','paco@gmail.com', 'Maestro de los fogones','Nuevo usuario', 'img/userpic.png','img/food.jpg'),["Tomate","Macarrones"],["La metemos al micro","Y lo sacamos del micro"],'',false,false,false,false,[],"../../img/pos.jpg"),
     new receta('Entrecote','26/05/2016','Una receta muy sencilla pa crear unos macarrones','','Facil','30 minutos',new register('frost','1234','12345','paco@gmail.com', 'Maestro de los fogones','Nuevo usuario', 'img/userpic.png','img/food.jpg'),["Tomate","Macarrones"],["La metemos al micro","Y lo sacamos del micro"],'',false,false,false,false,[],"../../img/pos.jpg"),
     new receta('Gallina','27/05/2016','Una receta muy sencilla pa crear unos macarrones','','Facil','30 minutos',new register('Paco','1234','12345','paco@gmail.com', 'Maestro de los fogones','Nuevo usuario', 'img/userpic.png','img/food.jpg'),["Tomate","Macarrones"],["La metemos al micro","Y lo sacamos del micro"],'',false,false,false,false,[],"../../img/pos.jpg"),
     new receta('Tarta de arandanos','28/05/2016','Una receta muy sencilla pa crear unos macarrones','','Facil','30 minutos',new register('luisca','1234','12345','paco@gmail.com', 'Maestro de los fogones','Nuevo usuario', 'img/userpic.png','img/food.jpg'),["Tomate","Macarrones"],["La metemos al micro","Y lo sacamos del micro"],'',false,false,false,false,[],"../../img/pos.jpg"),




    ];

  getRecetas(){

      return this.recetas;

  }
  saveReceta(receta:receta){
    this.recetas.push(receta);
    //return withObserver(usuario);
  }

  getReceta(nombre: string) {
    let rceta = this.recetas.filter(h => h.nombre === nombre)[0]
    return withObserver(new receta(rceta.nombre,rceta.fecha,rceta.descripcion,rceta.tipo,rceta.dificultad,rceta.tiempo,rceta.autor,rceta.ingredientes,rceta.pasos,rceta.video,rceta.vegana,rceta.grasas,rceta.diabeticos,rceta.picante,rceta.comentarios,rceta.imagen));
  }
  getrecetasuser(usuario:string)
  {
    //this.recetasuser=[];
    //let recetas=this.recetas.filter(h=>h.autor.nombre ===autor)
    for (var receta of this.recetas)
    {
      if (receta.autor.nombre==usuario){
        this.recetasuser.push(receta);
      }
    }
    return this.recetasuser;
    }

    getrecetasparaelusuario(usuario:string)
    {
      //let recetas=this.recetas.filter(h=>h.autor.nombre ===autor)
      this.recetasuserparaelusuario=[];
      for (var receta of this.recetas)
      {

        if (receta.autor.nombre==usuario){
          this.recetasuserparaelusuario.push(receta);

        }


      }
      return this.recetasuserparaelusuario;
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
