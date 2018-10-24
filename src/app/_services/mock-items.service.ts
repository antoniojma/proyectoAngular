import { Injectable } from '@angular/core';
import {Item} from '../../_model/Item';
import {Observable} from "rxjs";
import {AbstractItemsService} from "./abstract-items.service";

@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractItemsService{

  items:Item[];

  constructor() 
  	{
      super();
  	this.items = [
  	new Item("comprar carne"),
  	new Item("comprar verdura"),
  	new Item("comprar carbon")] 
  	}

  getItems():Observable<Item[]>
  	{
  	 return new Observable ((observable) =>
  		{
  		observable.next(this.items);
  		observable.complete();
  		})
  	}

   remove(item:Item):Observable<Item[]>
    {
    return new Observable ((observable) =>
        {
         this.items=this.items.filter(it=> it!== item);
         observable.next(this.items);
         observable.complete();
        })
    }

   addItem(item:Item):Observable<Item[]>
    {
    return new Observable ((observable) =>
        {
         this.items.push(item);
         observable.next(this.items);
         observable.complete();
        })
    }

}
