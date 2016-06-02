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

  receta:receta;
  recetita: receta;
  ingrediente:string;
  pasos:string[];
  autor:register;
  paso:string;



  constructor(private router: Router,private RecetaService :RecetaService ,private _routeParams:RouteParams, private RegisterService:RegisterService){



  }

  ngOnInit(){
    let nombre=this._routeParams.get("nombre");
    if(nombre){
    this.RecetaService.getReceta(nombre).subscribe(
      receta => this.receta = receta,
      error => console.log(error)
    )
  }else{
    this.recetita = new receta('','22/05/2016','','','','',this.RegisterService.getCurrentUser(),[],[],'',false,false,false,false,[],'../../img/pos.jpg');
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
    this.pasos.push(this.paso);



  }

  changed(event) {
   this.recetita.tipo = event;
 }

 }
