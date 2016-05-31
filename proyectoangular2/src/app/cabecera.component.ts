import {Component,Input,Output,EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {RegisterService} from './register/register.service';
import {RegisterComponent} from './register/register.component';
import {register} from './register/register.model';
import {UserService} from './user/user.service';
import {user} from './user/user.model';


@Component({
       selector: 'cabecera', // mirar que es selector
       templateUrl: './app/cabecera.component.html',

})
export class cabeceraComponent{
  private regis : register[];
  currentUser:register;
  nombrelogin: string;
  private user:user[];
  contrasenialogin:string;
  encontrado: boolean;
  hideModal : boolean = false;
  constructor (private router: Router, private service: RegisterService, private userrservice:UserService){

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
    this.regis = this.service.getUsers();

  }
  currentActive(){
       this.currentUser = this.service.getCurrentUser();
       return this.service.getCurrentUser()!=undefined;
   }
   seteouserjimlu()
   {
     this.user = this.userrservice.getUsers();
      for(var users of this.user)
      {
        if(users.nombre==this.nombrelogin)
        {
          this.userrservice.setUser(users);
      }
    }

   }
  compareTo(){
    var encontrado = false;
      this.regis = this.service.getUsers();
    for (var usuario of this.regis){
          //console.log(this.regis);
        if(usuario.nombre == this.nombrelogin){
            //console.log(this.regis);
            if(usuario.contrasenia == this.contrasenialogin){
                //console.log(this.regis);
                encontrado = true;
                //console.log(usuario.nombre);
                //console.log(this.nombrelogin);
                this.currentUser = usuario;
                this.service.setUser(usuario);
                this.seteouserjimlu();
                //console.log(this.currentUser);
                //console.log(this.service.getCurrentUser());
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
