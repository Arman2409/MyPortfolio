"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AboutData_js_1 = __importDefault(require("../models/AboutData.js"));
const Portfolio_js_1 = __importDefault(require("../models/Portfolio.js"));
const Skill_js_1 = __importDefault(require("../models/Skill.js"));
const LanguageSkill_js_1 = __importDefault(require("../models/LanguageSkill.js"));
const CV_js_1 = __importDefault(require("../models/CV.js"));
const Link_js_1 = __importDefault(require("../models/Link.js"));
function getData(req, res) {
    const type = req.params.data.replace(":", "");
    if (type == "about") {
        AboutData_js_1.default.find({}, (err, result) => {
            if (err) {
                console.error(err);
            }
            else {
                res.json(result);
            }
        });
    }
    ;
    if (type == "portfolio") {
        Portfolio_js_1.default.find({}, (err, result) => {
            if (err) {
                console.error(err);
            }
            else {
                res.json(result);
            }
        });
    }
    ;
    if (type == "skills") {
        Skill_js_1.default.find({}, (err, result) => {
            if (err) {
                console.error(err);
            }
            else {
                res.json(result);
            }
        });
    }
    ;
    if (type == "languages") {
        LanguageSkill_js_1.default.find({}, (err, result) => {
            if (err) {
                console.error(err);
            }
            else {
                res.json(result);
            }
            ;
        });
    }
    ;
    if (type == "CV") {
        CV_js_1.default.find({}, (err, result) => {
            if (err) {
                console.error(err);
            }
            else {
                res.json(result[0]);
            }
            ;
        });
    }
    ;
    if (type == "links") {
        Link_js_1.default.find({}, (err, result) => {
            if (err) {
                console.error(err);
            }
            else {
                res.json(result);
            }
            ;
        });
    }
    ;
}
exports.default = getData;
