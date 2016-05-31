import {receta} from '../creacionreceta/receta.model';
export class register{
    nombre:string;
    contrasenia:string;
    repiticioncontrasenia:string;
    correousuario:string;
    rango: string;
    bio: string;
    fotoperfil: string;
    fotobanner:string;


    constructor(nombrec:string,contraseniac:string,repiticioncontraseniac:string,correousuarioc:string, rangoc:string, bioc:string, fotoperfilc:string,fotobannerc:string)
    {
      this.nombre=nombrec;
      this.contrasenia=contraseniac;
      this.repiticioncontrasenia=repiticioncontraseniac;
      this.correousuario=correousuarioc;
      this.rango = rangoc;
      this.bio = bioc;
      this.fotoperfil = fotoperfilc;
      this.fotobanner = fotobannerc;
}}
