"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const main_scss_1 = __importDefault(require("../../../../styles/main.scss"));
const Demo_1 = __importDefault(require("../../../Parts/Demo/Demo"));
const LanguageSkill_1 = __importDefault(require("./components/LanguageSkill"));
const fetchData_1 = require("../../../../API/fetchData");
const LanguageSkills = () => {
    const [demoState, setDemoState] = (0, react_1.useState)(true);
    const [mySkills, setMySkills] = (0, react_1.useState)([]);
    const mainCont = (0, react_1.useRef)(null);
    const isSmall = (0, material_1.useMediaQuery)("(max-width:500px)");
    (0, react_1.useEffect)(() => {
        setTimeout(() => {
            mainCont.current.style.top = "0px";
        }, 1000);
        setDemoState(true);
        (0, fetchData_1.fetchData)("getData", "languages").then((res) => {
            setMySkills(res);
            setDemoState(false);
        }).catch((errorMsg) => console.error(errorMsg));
    }, [setMySkills, setDemoState, mainCont]);
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { ref: mainCont, sx: {
            transition: "0.5s",
            position: "relative",
            top: "-2500px",
            padding: "20px",
            width: isSmall ? "100%" : "80%",
            backgroundColor: main_scss_1.default.backgroundColor2,
            height: "auto",
            margin: "50px 0",
            boxShadow: main_scss_1.default.mainShadow,
        }, children: [(0, jsx_runtime_1.jsx)(Demo_1.default, { state: demoState }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h4", color: main_scss_1.default.textColor1, fontFamily: "'Pacifico', cursive;", sx: {
                    fontSize: "35px",
                    textAlign: "center"
                }, children: "My Language Skills" }), mySkills.map((elem, index) => ((0, jsx_runtime_1.jsx)(material_1.Box, { children: (0, jsx_runtime_1.jsx)(LanguageSkill_1.default, { language: elem.language, level: elem.level }) }, index)))] }));
};
exports.default = LanguageSkills;
