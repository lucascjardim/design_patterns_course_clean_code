import Item from "./Item";
import TaxItem from "./TaxItem";

export default class Invoice{
  items: Item[];

  constructor(){
    this.items = [];
  }

  addItem(item:Item){
    this.items.push(item);
  }

  getTaxes(){
    let total = 0;
    //LISKOV SUBSTITUTE PRINCIPLE
    //se S (beer, whisky e water) é subclasse de T (item)
    //Deve ser possível substituir T por S, sem quebrar o comportamento do programa.

    for(const item of this.items){
      if(item instanceof TaxItem) {
        total += item.calculateTax();
      }
    }
    return total;
  }
}