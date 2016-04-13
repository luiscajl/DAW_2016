import {bootstrap} from 'angular2/platform/browser';
import {MainApp} from './app/main';
import {SuscripcionsComponent} from './app/suscripcions.component';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {UserComponent} from './app/user.component';
import {RecetaComponent} from './app/receta.component';

bootstrap(MainApp, [
  ROUTER_PROVIDERS
]);
