import {Component} from 'angular2/core';
import {receta} from './receta.model';
import {register} from '../register/register.model';
import {RecetaService} from './receta.service';


import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

@Component({
  selector: 'creacionreceta',
  templateUrl: 'app/creacionreceta/creacionreceta.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class CreacionRecetaComponent {


  recetita: receta;
  ingrediente:string;
  paso:string;
  autor:register;



  constructor(private router: Router,private RecetaService :RecetaService ,private _routeParams:RouteParams){
    let nombre=this._routeParams.get("nombre");
    if(nombre){
    this.RecetaService.getReceta(nombre).subscribe(
      receta => this.recetita = receta,
      error => console.log(error)
    )

  }else{
this.recetita = new receta('','22/05/2016','','','','',null,[],[],'',false,false,false,false);

  }
  }



  cancel() {
    window.history.back();
  }

  save() {


    this.RecetaService.saveReceta(this.recetita);
    this.gotoReceta();
  }


  gotoReceta(){
        console.log(this.recetita);
        this.router.navigate(['Receta', { nombre: this.recetita.nombre }]);

  }

  addIngrediente(){
    this.recetita.ingredientes.push(this.ingrediente);


  }

  addPaso(){
    this.recetita.pasos.push(this.paso);



  }

 }
