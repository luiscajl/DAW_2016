import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {RegisterService} from '../../register/register.service';
import {register} from '../../register/register.model';


@Component({
  selector: 'ControlPanelContrasenia',
  templateUrl: 'app/controlpanel/controlpanel/contrasenia.html',
  directives: [ROUTER_DIRECTIVES]
})

export class ControlPanelContrasenia {
  mostrarFallo = false;
  mostrarAcierto=true;
  private register:register;
  private emailnuevo="";
  private pass="";
  private passnueva="";
  private passnuevarepeticion="";

  constructor (private router: Router, private registerservice:RegisterService){}
  ngOnInit(){
    this.register = this.registerservice.getCurrentUser();
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
    mostrarAlert(mostrar:boolean){
      if(mostrar){
          this.mostrarAcierto=true;
      }else{
          this.mostrarFallo=true;
      }
  }
    gotonotificaciones(){
      let link = ['ControlNotificaciones'];
      this.router.navigate(link);
    }
    updateemailuser(){
      this.register.correousuario=this.emailnuevo;

    }
    updatepassuser(){
      this.pass=this.registerservice.getCurrentUser().contrasenia;
      if(this.passnueva==this.passnuevarepeticion)
      {
        if(this.passnueva!=this.pass)
        {
          this.register.contrasenia=this.passnueva;
          this.register.repiticioncontrasenia=this.passnueva;
        }
        else{this.mostrarAlert(true);}

      }
    }
}
