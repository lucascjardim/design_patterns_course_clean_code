"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DarkWidgetFactory_1 = __importDefault(require("../../../src/creational/abstract_factory/DarkWidgetFactory"));
const LightWidgetFactory_1 = __importDefault(require("../../../src/creational/abstract_factory/LightWidgetFactory"));
const View_1 = __importDefault(require("../../../src/creational/abstract_factory/View"));
test("Deve criar uma interface gráfica com tema light", function () {
    const view = new View_1.default(new LightWidgetFactory_1.default());
    expect(view.label.color).toBe("black");
    expect(view.button.color).toBe("white");
    expect(view.button.backgroundColor).toBe("blue");
});
test("Deve criar uma interface gráfica com tema dark", function () {
    const view = new View_1.default(new DarkWidgetFactory_1.default());
    expect(view.label.color).toBe("white");
    expect(view.button.color).toBe("white");
    expect(view.button.backgroundColor).toBe("black");
});
