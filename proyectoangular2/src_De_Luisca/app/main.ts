import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router, ROUTER_PROVIDERS} from 'angular2/router';
import {iniciocomponent} from './inicio/inicio.component';
import {suscripcionescomponent} from './suscripciones/suscripciones.component';
import {cabeceraComponent} from './cabecera.component';
import {FooterComponent} from './footer.component';
import {ControlPanelComponent} from './controlpanel/controlpanel.component';
import {UserComponent} from './user/user.component';
import {RegisterComponent} from './register/register.component';
import {RecetaComponent} from './receta/receta.component';
import {AdminComponent} from './admin/admin.component';
import {RegisterService} from './register/register.service';
import {CreacionRecetaComponent} from './creacionreceta/creacionreceta.component';

@Component({

  selector: 'main-app',
  providers: [ROUTER_PROVIDERS,RegisterService],
  templateUrl: './app/cuerpo.html',

  directives: [ROUTER_DIRECTIVES, cabeceraComponent,FooterComponent ,UserComponent,RegisterComponent,RecetaComponent,AdminComponent],

  pipes: []
})

@RouteConfig([
 {path:'/Inicio',
    name: 'Inic',
    component: iniciocomponent},

{path:'/Suscripciones',
    name: 'Susc',
    component: suscripcionescomponent,
     },
{path:'/Footer',
    name: 'Footer',
    component: FooterComponent,},
{path:'/ControlPanel',
    name: 'Control',
    component: ControlPanelComponent,},
{path:'/User',
    name:'User',
    component: UserComponent},
{path:'/Register',
    name:'Register',
    component:RegisterComponent,
    useAsDefault: true},
{path:'/Receta',
    name:'Receta',
    component:RecetaComponent},
{path:'/Admin',
    name:'Admin',
    component:AdminComponent},
{path:'/CrearReceta',
    name:'CrearReceta',
    component:CreacionRecetaComponent},


])


export class MainApp {

}
