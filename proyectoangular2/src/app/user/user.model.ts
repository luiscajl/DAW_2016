export class user{
    nombre:string;
    imageperfil:string;
    rango:string;
    icono:string;
    infousuario:string;
    seguidoresrecetas:string;
    recetas:string;
    recetarios:string;

    constructor(nombrec:string,imageperfilc:string,rangoc:string,iconoc:string,infousuarioc:string,seguidoresrecetasc:string,recetasc:string,recetariosc:string)
    {
      this.nombre=nombrec;
      this.imageperfil=imageperfilc;
      this.rango=rangoc;
      this.icono=iconoc;
      this.infousuario=infousuarioc;
      this.seguidoresrecetas=seguidoresrecetasc;
      this.recetas=recetasc;
      this.recetarios=recetariosc;
    }

}
