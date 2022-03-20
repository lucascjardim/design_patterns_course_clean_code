import TaxItem from "./TaxItem"

export default class Eletronic extends TaxItem{
  constructor(readonly description:string, readonly price:number){
    super("Eletronic", description, price);
  }
  calculateTax(): number {
    return (this.price * 10) / 100;
  }
}