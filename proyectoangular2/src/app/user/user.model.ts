import {register} from '../register/register.model';
export class user{
    nombre:string;
    imageperfil:string;
    fondoperfil:string;
    seguidoresrecetas=[];


    constructor(nombrec:string,imageperfilc:string,fondoperfilc:string,seguidoresrecetasc=[])
    {
      this.nombre=nombrec;
      this.imageperfil=imageperfilc;
      this.fondoperfil=fondoperfilc;
      this.seguidoresrecetas=seguidoresrecetasc;

    }

}
