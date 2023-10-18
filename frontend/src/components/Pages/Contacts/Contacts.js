"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Links_1 = __importDefault(require("./components/Links"));
const MessageMe_1 = __importDefault(require("./components/MessageMe"));
const Contacts = () => {
    const mainBox = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        setTimeout(() => {
            mainBox.current.style.top = "0px";
        }, 1000);
        window.scrollTo({ top: 0 });
    });
    return ((0, jsx_runtime_1.jsxs)("div", { ref: mainBox, style: {
            transition: "0.5s",
            position: "relative",
            top: "-2500px",
        }, children: [(0, jsx_runtime_1.jsx)(Links_1.default, {}), (0, jsx_runtime_1.jsx)(MessageMe_1.default, {})] }));
};
exports.default = Contacts;
