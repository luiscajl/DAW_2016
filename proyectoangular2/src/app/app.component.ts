import { Component }       from 'angular2/core';
import { HeroesComponent } from './heroes.component';
import {DashboardComponent} from './dashboard.component';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';



@Component({
  selector: 'navegador',
  template: `
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Desplegar navegación</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html"></a>
        </div>
        <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav ">
            <a [routerLink]="['Inicio']">Inicio</a>
            <a [routerLink]="['Suscripciones']">Suscripciones</a>
            <router-outlet></router-outlet>
            </ul>



            <ul class="nav navbar-nav navbar-right">
                <li><form class="navbar-form nav navbar-nav " role="search">
                    <fieldset class="busqueda">
                        <input class="busqueda" type="search" />
                        <button class="busqueda" type="submit"><i class="fa fa-search"></i></button>
                    </fieldset>
                </form>
                    </li>



                <li><a href="register.html"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a id="log" data-toggle="modal" data-target="#myModal" href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
        </div></div>
</nav>




  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/heroes',
    name: 'Inicio',
    component: HeroesComponent
  },
  {
    path: '/dashboard',
    name: 'Suscripciones',
    component: DashboardComponent,

  },

])

export class AppComponent {
}
