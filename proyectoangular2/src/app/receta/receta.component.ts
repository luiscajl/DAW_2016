import {Component} from 'angular2/core';
import {receta} from '../creacionreceta/receta.model';
import {comentario} from './comentario.model';
import {ComentarioService} from './comentario.service';
import {RecetaService} from '../creacionreceta/receta.service';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

@Component({
  selector: 'receta',
  templateUrl: 'app/receta/receta.component.html',
  directives: [ROUTER_DIRECTIVES],
})

export class RecetaComponent {

  receta: receta;
  comentarios:comentario[];
  comentario: comentario;
  constructor(private RecetaService : RecetaService,private _routeParams:RouteParams, private ComentarioService:ComentarioService ){

 }


  ngOnInit(){
    let nombre=this._routeParams.get("nombre");
    this.RecetaService.getReceta(nombre).subscribe(
      receta => this.receta = receta,
      error => console.log(error)
    )
  //  this.comentarios = this.RecetaService.getComentarios();
  this.comentario = new comentario('',null,this.receta);


}

getReceta(){
return this.receta;

}

addComentario(){
  this.ComentarioService.saveComentario(this.comentario);
    this.RecetaService.addComentario(this.comentario);

}
}
