"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaxItem_1 = __importDefault(require("./TaxItem"));
class Invoice {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getTaxes() {
        let total = 0;
        //LISKOV SUBSTITUTE PRINCIPLE
        //se S (beer, whisky e water) é subclasse de T (item)
        //Deve ser possível substituir T por S, sem quebrar o comportamento do programa.
        for (const item of this.items) {
            if (item instanceof TaxItem_1.default) {
                total += item.calculateTax();
            }
        }
        return total;
    }
}
exports.default = Invoice;
