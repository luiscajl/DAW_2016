import {Component} from 'angular2/core';
import {receta} from './receta.model';
import {RecetaService} from './receta.service';

import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

@Component({
  selector: 'creacionreceta',
  templateUrl: 'app/creacionreceta/creacionreceta.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class CreacionRecetaComponent {


  recetita: receta;
  constructor(private RecetaService :RecetaService ,private _routeParams:RouteParams){
    let nombre=this._routeParams.get("nombre");
    if(nombre){
    this.RecetaService.getReceta(nombre).subscribe(
      receta => this.recetita = receta,
      error => console.log(error)
    )

  }else{


  }
  }



  cancel() {
    window.history.back();
  }

  save() {


    this.RecetaService.saveReceta(this.recetita);
    window.history.back();
  }
 }
