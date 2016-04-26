import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {user} from './user.model';

@Component({
  selector: 'user',
  templateUrl: 'app/user/user.component.html',
})

export class UserComponent {

private userLuisca= new user ("Luisca","./app","Cocinillas de cuidado","./app","El mismo de siempre a estas horas","13","3","1");
}
