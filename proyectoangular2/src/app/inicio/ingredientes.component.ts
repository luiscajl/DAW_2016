import {Component,Input,Output,EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

interface Item {
	description:string;
	checked:boolean;
}
@Component({
       selector: 'ingredientes', // mirar que es selector
       templateUrl: './app/inicio/ingredientes.component.html',
})
export class ingredientesComponent{

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
