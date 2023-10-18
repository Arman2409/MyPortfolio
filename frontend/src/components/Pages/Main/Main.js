"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const About_1 = __importDefault(require("./About/About"));
const MySkills_1 = __importDefault(require("./MySkills/MySkills"));
const LanguageSkills_1 = __importDefault(require("./LanguageSkills/LanguageSkills"));
function MainPage() {
    (0, react_1.useEffect)(() => {
        window.scrollTo({ top: 0 });
    }, []);
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
        }, children: [(0, jsx_runtime_1.jsx)(About_1.default, {}), (0, jsx_runtime_1.jsx)(MySkills_1.default, {}), (0, jsx_runtime_1.jsx)(LanguageSkills_1.default, {})] }));
}
exports.default = MainPage;
