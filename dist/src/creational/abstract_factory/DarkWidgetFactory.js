"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DarkButton_1 = __importDefault(require("./DarkButton"));
const DarkLabel_1 = __importDefault(require("./DarkLabel"));
class DarkWidgetFactory {
    createLabel() {
        return new DarkLabel_1.default();
    }
    createButton() {
        return new DarkButton_1.default();
    }
}
exports.default = DarkWidgetFactory;
