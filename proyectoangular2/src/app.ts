import {bootstrap} from 'angular2/platform/browser';
import {MainApp} from './app/main';
import {provide} from 'angular2/core';
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS,LocationStrategy, HashLocationStrategy} from 'angular2/router';

bootstrap(MainApp, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
