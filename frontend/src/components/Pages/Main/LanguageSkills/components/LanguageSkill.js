"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const main_scss_1 = __importDefault(require("../../../../../styles/main.scss"));
const levelsArray = ["A1", "A2", "B1", "B2", "C1", "C2"];
const LanguageSkill = ({ language, level }) => {
    const [levelNumber, setLevelNumber] = (0, react_1.useState)(0);
    const [colorPercentage, setColorPercentage] = (0, react_1.useState)(0);
    const isSmall = (0, material_1.useMediaQuery)("(max-width:500px)");
    (0, react_1.useEffect)(() => {
        const ordersCount = levelsArray.length;
        const order = levelsArray.indexOf(level) + 1;
        if (!level)
            setLevelNumber(0);
        else
            setLevelNumber(order);
        setColorPercentage(20 + (80 - ((ordersCount - order) * 13.25)));
    }, [level, setLevelNumber]);
    return ((0, jsx_runtime_1.jsxs)(material_1.Grid, { container: true, sx: {
            backgroundColor: main_scss_1.default.backgroundColor1,
            height: "50px",
            alignItems: "center",
            justifyContent: "space-evenly",
            pl: isSmall ? "5px" : "25px",
            my: "20px",
            border: `0.5px solid ${main_scss_1.default.textColor1}`,
            borderRadius: "10px",
            backgroundImage: `-webkit-linear-gradient(left, ${main_scss_1.default.borderColor1}, ${main_scss_1.default.borderColor1} ${colorPercentage}%, transparent ${colorPercentage}%, transparent 100%)`,
            width: "100%",
        }, children: [(0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, width: "20%", sx: {
                    height: { xs: "50%", md: "100%" },
                    display: "flex",
                    alignItems: "center"
                }, children: (0, jsx_runtime_1.jsx)(material_1.Typography, { color: main_scss_1.default.backgroundColor1, variant: "h6", fontSize: isSmall ? 12 : 16, fontWeight: 900, children: language }) }), (0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, container: true, width: "80%", sx: {
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    height: { xs: "50%", md: "100%" }
                }, children: levelsArray.map((lvl, key) => ((0, jsx_runtime_1.jsx)(material_1.Typography, { fontWeight: 900, sx: {
                        color: levelNumber > levelsArray.indexOf(lvl) ? main_scss_1.default.textColor2 : main_scss_1.default.textColor1,
                        transition: "0.5s",
                    }, children: lvl }, key))) })] }));
};
exports.default = LanguageSkill;
