import {receta} from "../creacionreceta/receta.model.ts";
import {register} from "../register/register.model.ts";
export class comentario{
  texto: string;
  usuario: register;
  receta: receta;
  constructor(texto:string, usuario:register, receta:receta){
      this.texto = texto;
      this.usuario = usuario;
      this.receta = receta;


  }
}
