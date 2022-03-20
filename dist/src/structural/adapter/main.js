"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HapiHttp_1 = __importDefault(require("./HapiHttp"));
function init(http) {
    http.route("get", "/books", function (params, body) {
        const books = [
            { title: "Clean Code" },
            { title: "Refactoring" },
            { title: "Implementing Domain-Driven Design" }
        ];
        return books;
    });
    http.listen(3002);
}
init(new HapiHttp_1.default());
