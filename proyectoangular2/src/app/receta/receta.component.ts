import {Component} from 'angular2/core';
import {receta} from '../creacionreceta/receta.model';
import {RecetaService} from '../creacionreceta/receta.service';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

@Component({
  selector: 'receta',
  templateUrl: 'app/receta/receta.component.html',
  directives: [ROUTER_DIRECTIVES],
})

export class RecetaComponent {

  receta: receta;
  constructor(private RecetaService : RecetaService,private _routeParams:RouteParams){




 }


  ngOnInit(){
    let nombre=this._routeParams.get("nombre");
    this.RecetaService.getReceta(nombre).subscribe(
      receta => this.receta = receta,
      error => console.log(error)
    )


}
}
