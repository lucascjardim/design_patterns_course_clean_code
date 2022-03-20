"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LightButton_1 = __importDefault(require("./LightButton"));
const LightLabel_1 = __importDefault(require("./LightLabel"));
class LightWidgetFactory {
    createLabel() {
        return new LightLabel_1.default();
    }
    createButton() {
        return new LightButton_1.default();
    }
}
exports.default = LightWidgetFactory;
