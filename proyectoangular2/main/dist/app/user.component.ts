import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component ({
  selector:'main-app',
  directives: [ROUTER_DIRECTIVES],
  templateUrl:'app/user.html',
  styleUrls:['app/css/user.css']
})
export class UserComponent{}
