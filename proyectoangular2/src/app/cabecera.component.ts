import {Component,Input,Output,EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {RegisterService} from './register/register.service';
import {RegisterComponent} from './register/register.component';
import {register} from './register/register.model';


@Component({
       selector: 'cabecera', // mirar que es selector
       templateUrl: './app/cabecera.component.html',
})
export class cabeceraComponent{
  private registros : register[];
  nombrelogin: string;
  contrasenialogin:string;
  encontrado: boolean;
  constructor (private router: Router, private service: RegisterService){}

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

        this.router.navigate(['User', { nombre: this.nombrelogin }]);

  }
  gotoCrReceta(){
    let link = ['CrearReceta'];
    this.router.navigate(link);
  }
  ngOnInit(){
    this.registros = this.service.getUsers();
    console.log(this.registros);
  }
  compareTo(){
    var encontrado = false;
    for (var usuario of this.registros){
        if(usuario.nombre == this.nombrelogin){
            if(usuario.contrasenia == this.contrasenialogin){
                encontrado = true;
                console.log(usuario.nombre);
                console.log(this.nombrelogin);
                this.gotoUser();
            }
        }
      }
      if (encontrado){

      }
    }

}
