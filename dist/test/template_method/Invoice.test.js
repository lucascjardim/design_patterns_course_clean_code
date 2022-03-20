"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Beer_1 = __importDefault(require("../../src/behavioral/template_metod/Beer"));
const Eletronic_1 = __importDefault(require("../../src/behavioral/template_metod/Eletronic"));
const Invoice_1 = __importDefault(require("../../src/behavioral/template_metod/Invoice"));
const Water_1 = __importDefault(require("../../src/behavioral/template_metod/Water"));
const Whisky_1 = __importDefault(require("../../src/behavioral/template_metod/Whisky"));
test("Deve criar uma nota fiscal", function () {
    const invoice = new Invoice_1.default();
    invoice.addItem(new Beer_1.default("Heineken 300ml", 10)); //10
    invoice.addItem(new Whisky_1.default("Jack Daniels", 100)); //20
    invoice.addItem(new Water_1.default("Santa Catarina 500ml", 5)); //0
    invoice.addItem(new Eletronic_1.default("TV 80 Pol", 1000)); //0
    const taxes = invoice.getTaxes();
    expect(taxes).toBe(121);
});
