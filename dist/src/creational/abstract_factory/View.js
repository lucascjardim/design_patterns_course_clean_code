"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class View {
    constructor(widgetFactory) {
        this.label = widgetFactory.createLabel();
        this.button = widgetFactory.createButton();
    }
}
exports.default = View;
