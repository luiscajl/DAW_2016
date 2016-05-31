import {Injectable} from 'angular2/core';
import {register} from '../register/register.model.ts';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';


@Injectable()
export class ControlPanelService{

  register:register;
  private viejabio="";
  private nuevabio="";
  private bio="";


  getcurrentcontrolpanel(){
    return this.register
  }

  }
