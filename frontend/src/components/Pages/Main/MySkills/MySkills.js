"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_2 = require("react");
const main_scss_1 = __importDefault(require("../../../../styles/main.scss"));
const Demo_1 = __importDefault(require("../../../Parts/Demo/Demo"));
const Skill_1 = __importDefault(require("./components/Skill"));
const functions_1 = require("./utils/functions");
const fetchData_1 = require("../../../../API/fetchData");
const MySkills = () => {
    const mainCont = (0, react_1.useRef)(null);
    const [skills, setSkills] = (0, react_1.useState)([]);
    const [demoState, setDemoState] = (0, react_1.useState)(true);
    const [dimensionsArr, setDimensionsArr] = (0, react_1.useState)([]);
    const isVeryLarge = (0, material_1.useMediaQuery)("(max-width:1600px)");
    const isExtraLarge = (0, material_1.useMediaQuery)("(max-width:1350px)");
    const isLarge = (0, material_1.useMediaQuery)("(max-width:1100px)");
    const isMedium = (0, material_1.useMediaQuery)("(max-width:800px)");
    const isSmall = (0, material_1.useMediaQuery)("(max-width:500px)");
    (0, react_2.useEffect)(() => {
        setTimeout(() => {
            mainCont.current.style.top = "0px";
        }, 1000);
        setDemoState(true);
        (0, fetchData_1.fetchData)("getData", "skills").then((res) => {
            setSkills(res);
            setDemoState(false);
            const { width, height, radius } = (0, functions_1.getResponsiveSizes)(isSmall, isMedium, isLarge, isExtraLarge, isVeryLarge);
            const dimsArr = (0, functions_1.getDimesions)([0, width], [radius, height - 2 * radius], radius, res.length);
            setDimensionsArr(dimsArr);
        }).catch((errorMsg) => console.error(errorMsg));
    }, [setSkills, isSmall, isMedium, isLarge, isExtraLarge, isVeryLarge]);
    (0, react_2.useEffect)(() => {
        const { width, height, radius } = (0, functions_1.getResponsiveSizes)(isSmall, isMedium, isLarge, isExtraLarge, isVeryLarge);
        const dimsArr = (0, functions_1.getDimesions)([0, width], [radius, height - 2 * radius], radius, skills.length);
        setDimensionsArr(dimsArr);
    }, [isSmall, isMedium, isLarge, skills, isExtraLarge, isVeryLarge]);
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { ref: mainCont, sx: {
            transition: "0.5s",
            position: "relative",
            top: "-2500px",
            width: isSmall || isMedium || isLarge ? "100%" : "80%",
            height: isSmall ? 1200 : isMedium ? 1000 : 800 + "px",
            marginTop: "50px",
        }, children: [(0, jsx_runtime_1.jsx)(Demo_1.default, { state: demoState }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h4", color: main_scss_1.default.textColor1, fontFamily: "'Pacifico', cursive;", sx: {
                    fontSize: "34.5px",
                    boxShadow: main_scss_1.default.mainShadow,
                    textAlign: "center",
                    lineHeight: "70px",
                    margin: "0 auto",
                    width: isSmall ? "100%" : isMedium ? "80%" : "100%",
                    backgroundColor: main_scss_1.default.backgroundColor2,
                }, children: "My Technical Skills" }), dimensionsArr.length && skills.map((elem, index) => {
                const zIndex = Math.random() * 3;
                return ((0, jsx_runtime_1.jsx)(Skill_1.default, { zIndex: zIndex, top: dimensionsArr[index].y, left: dimensionsArr[index].x, source: elem.source, percentage: elem.percentage }, index));
            })] }));
};
exports.default = MySkills;
