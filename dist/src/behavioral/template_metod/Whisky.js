"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaxItem_1 = __importDefault(require("./TaxItem"));
class Whisky extends TaxItem_1.default {
    constructor(description, price) {
        super("Whisky", description, price);
    }
    calculateTax() {
        return (this.price * 20) / 100;
    }
}
exports.default = Whisky;
