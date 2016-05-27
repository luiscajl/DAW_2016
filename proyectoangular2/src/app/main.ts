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
import {ControlPanelRecetas} from './controlpanel/controlpanel/admrecetas';
import {ControlPanelRecetarios} from './controlpanel/controlpanel/admrecetarios';
import {ControlPanelContrasenia} from './controlpanel/controlpanel/contrasenia';
import {ControlPanelNotificaciones} from './controlpanel/controlpanel/notificaciones';
import {RecetaService} from './creacionreceta/receta.service';
import {ComentarioService} from './receta/comentario.service';
import {UserService} from './user/user.service';
import {ControlPanelService} from './controlpanel/controlpanel.service';



@Component({

  selector: 'main-app',
  providers: [ROUTER_PROVIDERS,RegisterService,UserService,ControlPanelService],
  templateUrl: './app/cuerpo.html',
  directives: [ROUTER_DIRECTIVES, cabeceraComponent,FooterComponent ,UserComponent,RegisterComponent,RecetaComponent,AdminComponent,ControlPanelRecetas,ControlPanelRecetarios,ControlPanelContrasenia,ControlPanelNotificaciones],

  pipes: []
})

@RouteConfig([
 {path:'/Inicio',
    name: 'Inic',
    component: iniciocomponent,
    useAsDefault: true},
{path:'/Suscripciones',
    name: 'Susc',
    component: suscripcionescomponent},
{path:'/Footer',
    name: 'Footer',
    component: FooterComponent,},
{path:'/ControlPanel',
    name: 'Control',
    component: ControlPanelComponent,},
{path:'/User/:nombre',
    name:'User',
    component: UserComponent},
{path:'/ControlPanel/Admrecetarios',
    name: 'ControlRecetarios',
    component: ControlPanelRecetarios},
{path:'/ControlPanel/Admrecetas',
    name: 'ControlRecetas',
    component: ControlPanelRecetas},
{path:'/ControlPanel/Contrasenia',
    name: 'ControlContrasenia',
    component: ControlPanelContrasenia,},
{path:'/ControlPanel/Notificaciones',
    name: 'ControlNotificaciones',
    component: ControlPanelNotificaciones},
{path:'/Register',
    name:'Register',
    component:RegisterComponent},
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
