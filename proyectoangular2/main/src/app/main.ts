import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {RecetaComponent} from './receta.component';
import {SuscripcionsComponent} from './suscripcions.component';
import {UserComponent} from './user.component';


@Component({
  selector: 'main-app',
  providers: [],
  templateUrl: 'app/main.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([{path:'/home',name: 'main',component: SuscripcionsComponent,useAsDefault:true},
{path:'/receta',name: 'receta',component: RecetaComponent},
{path:'/suscripcions',name: 'suscripcions',component: SuscripcionsComponent},
{path:'/user',name: 'user,',component: UserComponent},


])
export class MainApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
