import {Component} from 'angular2/core';
import {comentario} from "./comentario.model.ts";
import {ComentarioService} from './comentario.service';
import {RecetaComponent} from './receta.component';
import {RecetaService} from '../creacionreceta/receta.service';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';


@Component({
  selector: 'comentario',
  templateUrl: 'app/creacionreceta/receta.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class ComentarioComponent {
    comentario: comentario;
    constructor(private router: Router,private RecetaService:RecetaService, private ComentarioService :ComentarioService,private RecetaComponent :RecetaComponent ,private _routeParams:RouteParams){
      this.comentario = new comentario('',null,null);
    }


    save(){
      this.comentario.receta = this.RecetaComponent.getReceta();
      this.ComentarioService.saveComentario(this.comentario);
    


    }



}
