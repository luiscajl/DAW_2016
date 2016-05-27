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
  private regis : register[];
  currentUser:register;
  nombrelogin: string;
  contrasenialogin:string;
  encontrado: boolean;
  hideModal : boolean = false;
  constructor (private router: Router, private service: RegisterService){

  }

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
        this.hideModal  = true;
        this.router.navigate(['User', { nombre: this.nombrelogin }]);

  }
  gotoCrReceta(){
    let link = ['CrearReceta'];
    this.router.navigate(link);
  }
  ngOnInit(){
    console.log(this.regis);
    this.regis = this.service.getUsers();
    console.log(this.regis);


  }
  currentActive(){
       this.currentUser = this.service.getCurrentUser();
       return this.service.getCurrentUser()!=undefined;
   }
  compareTo(){
    var encontrado = false;
      console.log(this.regis);
      this.regis = this.service.getUsers();
      console.log(this.regis);
    for (var usuario of this.regis){
          console.log(this.regis);
        if(usuario.nombre == this.nombrelogin){
            console.log(this.regis);
            if(usuario.contrasenia == this.contrasenialogin){
                console.log(this.regis);
                encontrado = true;
                //console.log(usuario.nombre);
                //console.log(this.nombrelogin);
                this.currentUser = usuario;
                this.service.setUser(usuario);
                console.log(this.currentUser);
                console.log(this.service.getCurrentUser());
                this.gotoUser();
                this.nombrelogin = this.service.getCurrentUser().nombre;

            }
        }
      }
      if (!encontrado){
        console.log("Error, usuario no creado");

      }
    }

}
