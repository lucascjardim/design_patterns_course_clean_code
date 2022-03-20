"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaxItem_1 = __importDefault(require("./TaxItem"));
class Beer extends TaxItem_1.default {
    constructor(description, price) {
        super("Beer", description, price);
    }
    calculateTax() {
        return (this.price * 10) / 100;
    }
}
exports.default = Beer;
