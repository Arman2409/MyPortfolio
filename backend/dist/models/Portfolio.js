"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_js_1 = __importDefault(require("./database.js"));
const Portfolio = new database_js_1.default.Schema({
    link: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    id: { type: Number, required: true },
    img: { type: String, required: true },
});
const Model = database_js_1.default.model("portfolio", Portfolio, "portfolio");
exports.default = Model;
