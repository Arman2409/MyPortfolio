"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Message_js_1 = __importDefault(require("../models/Message.js"));
exports.default = (req, res) => {
    const options = req.body;
    console.log(req.body);
    Message_js_1.default.find({ email: options.email }, (err, response) => {
        if (err)
            console.log({ error: err });
        if (response) {
            if (response.length > 0) {
                res.json({ message: "Already have a message to review" }).end();
                return;
            }
            Message_js_1.default.create(options, (err, resp) => {
                if (err) {
                    res.json({ message: "Error occured" }).end();
                    return;
                }
                if (resp) {
                    res.json({ message: "Message sent" }).end();
                    return;
                }
            });
        }
        ;
    });
};
