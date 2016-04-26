import {Component,Input,Output,EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

@Component({
       selector: 'cabecera', // mirar que es selector
       templateUrl: './app/cabecera.component.html',
})
export class cabeceraComponent{
  constructor (private router: Router){}

  gotosuscrip(){
    let link = ['Susc'];
    this.router.navigate(link);
  }

  gotoinicio(){
    let link = ['Inic'];
    this.router.navigate(link);
  }
  gotoregister(){
    let link =['Register'];
    this.router.navigate(link);
  }
  gotoUser(){
    let link=['User'];
    this.router.navigate(link);
  }
  gotoCrReceta(){
    let link = ['CrearReceta'];
    this.router.navigate(link);
  }
}
