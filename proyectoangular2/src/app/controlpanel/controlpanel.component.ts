import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {RegisterService} from '../register/register.service';
import {UserService} from '../user/user.service';
import {register} from '../register/register.model';


@Component({
  selector: 'controlpanel',
  templateUrl: 'app/controlpanel/controlpanel.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class ControlPanelComponent {
  register:register;
  

  constructor (private router: Router, private _routeParams:RouteParams,public registerservice: RegisterService, private userservice:UserService){}
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
  gotonotificaciones(){
    let link = ['ControlNotificaciones'];
    this.router.navigate(link);
  }





}
