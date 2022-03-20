import Beer from "../../src/behavioral/template_metod/Beer";
import Eletronic from "../../src/behavioral/template_metod/Eletronic";
import Invoice from "../../src/behavioral/template_metod/Invoice";
import Water from "../../src/behavioral/template_metod/Water";
import Whisky from "../../src/behavioral/template_metod/Whisky";

test("Deve criar uma nota fiscal", function(){
  const invoice = new Invoice();
  invoice.addItem(new Beer("Heineken 300ml", 10)); //10
  invoice.addItem(new Whisky("Jack Daniels", 100)); //20
  invoice.addItem(new Water("Santa Catarina 500ml", 5)); //0
  invoice.addItem(new Eletronic("TV 80 Pol", 1000)); //0
  const taxes = invoice.getTaxes();
  expect(taxes).toBe(121);

})