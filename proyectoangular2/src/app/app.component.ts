import {Component} from 'angular2/core';
import {CabeceraComponent} from './cabecera.component.ts';
import {FooterComponent} from './footer.component.ts';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';
import {ControlPanelComponent} from'./controlpanel/controlpanel.component.ts';
import {CreacionRecetaComponent} from './creacionreceta/creacionreceta.component.ts';
import {RecetaComponent} from './receta/receta.component.ts';
import {RegisterComponent} from './register/register.component.ts';
import {SuscripcionsComponent} from './suscripcions/suscripcions.component.ts';
import {UserComponent} from './user/user.component.ts';
import {PrincipalComponent} from './principal/principal.component.ts';

interface Item {
	description:string;
	checked:boolean;
}

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html',
	directives:[CabeceraComponent,FooterComponent,ControlPanelComponent,CreacionRecetaComponent,RecetaComponent,RegisterComponent,SuscripcionsComponent,UserComponent,PrincipalComponent,ROUTER_DIRECTIVES],
})
@RouteConfig([
	{path:'/principal',name:'Principal', component: PrincipalComponent,useAsDefault:true },
	{path:'/user', name :'User', component:UserComponent},
	{path:'/suscripcions', name :'Suscripcions',component:SuscripcionsComponent},
	{path:'/register',name:'Register',component:RegisterComponent},
	{path:'/receta',name:'Receta',component:RecetaComponent},
	{path:'/controlpanel',name:'ControlPanel',component:ControlPanelComponent},
	{path:'/creacionreceta',name:'CreacionReceta',component:CreacionRecetaComponent},

])
export class AppComponent {

	private items: Item[] = [];

	addItem(description: string){
		this.items.push({description, checked: false});
	}

	removeItem(item: Item){
		let index = this.items.indexOf(item);
		if(index > -1){
			this.items.splice(index,1);
		}
	}
}
