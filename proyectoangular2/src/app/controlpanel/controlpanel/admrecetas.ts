import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {RecetaService} from '../../creacionreceta/receta.service';
import {receta} from '../../creacionreceta/receta.model';
import {RegisterService} from '../../register/register.service';
import {register} from '../../register/register.model';

@Component({
  selector: 'ControlPanelRecetas',
  templateUrl: 'app/controlpanel/controlpanel/admrecetas.html',
  directives: [ROUTER_DIRECTIVES]
})

export class ControlPanelRecetas {
  private recetas: receta[];
  receta:receta;
  recetauser:receta[];
  usuarioactivo:string;
  recetascurrentuser:receta[];
  constructor (private router: Router, private recetaser:RecetaService,private registerser:RegisterService){
    this.recetas=this.recetaser.getRecetas();

  }
  ngOnInit()
  {
    this.usuarioactivo=this.registerser.getCurrentUser().nombre;
    this.recetauser=this.recetaser.getrecetasuser(this.usuarioactivo);
    console.log(this.recetauser);
  }
    gotocontrolpanel(){
      let link = ['Control'];
      this.router.navigate(link);
    }
    gotoadmrecetarios(){
      let link = ['ControlRecetarios'];
      this.router.navigate(link);
    }

    gotoadmrecetas(){
      let link = ['ControlRecetas'];
      this.router.navigate(link);
    }

    gotoemail(){
      let link = ['ControlContrasenia'];
      this.router.navigate(link);
    }
    gotonotificaciones(){
      let link = ['ControlNotificaciones'];
      this.router.navigate(link);
    }
    currentrecetas(){
      this.usuarioactivo=this.registerser.getCurrentUser().nombre;
      for (var receta of this.recetas)
      {
        console.log(this.recetas);
        if (this.receta.autor.nombre==this.usuarioactivo){

        }
      }




    }
}
