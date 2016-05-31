import {Component} from 'angular2/core';
import {receta} from './receta.model';
import {register} from '../register/register.model';
import {RecetaService} from './receta.service';
import {RegisterService} from '../register/register.service';


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



  constructor(private router: Router,private RecetaService :RecetaService ,private _routeParams:RouteParams, private RegisterService:RegisterService){

this.recetita = new receta('','22/05/2016','','','','',RegisterService.getCurrentUser(),[],[],'',false,false,false,false,[]);

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

  changed(event) {
   this.recetita.tipo = event;
 }

 }
