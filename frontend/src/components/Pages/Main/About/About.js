"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const react_simple_typewriter_1 = require("react-simple-typewriter");
const main_scss_1 = __importDefault(require("../../../../styles/main.scss"));
const Demo_js_1 = __importDefault(require("../../../Parts/Demo/Demo.js"));
const fetchData_1 = require("../../../../API/fetchData");
const speeds = [
    {
        duration: 2,
        speed: 100
    },
    {
        duration: 2,
        speed: 10
    },
    {
        duration: 5,
        speed: 1
    }
];
function About() {
    const mainBox = (0, react_1.useRef)(null);
    const [info, setInfo] = (0, react_1.useState)("");
    const [link, setLink] = (0, react_1.useState)("");
    const [demoState, setDemoState] = (0, react_1.useState)(true);
    const [speed, setSpeed] = (0, react_1.useState)(100);
    const isLarge = (0, material_1.useMediaQuery)("(max-width:1100px)");
    const startChainTimeout = (0, react_1.useCallback)((count = 0, speeds) => {
        if (!speeds[count]) {
            return;
        }
        ;
        setTimeout(() => {
            setSpeed(speeds[count].speed);
            return startChainTimeout(count + 1, speeds);
        }, speeds[count].duration * 1000);
    }, [setSpeed]);
    (0, react_1.useEffect)(() => {
        setDemoState(true);
        (0, fetchData_1.fetchData)("getData", "about").then((res) => {
            const { link = "", data = "" } = res[0];
            setInfo(data);
            setLink(link);
            setDemoState(false);
        }).catch((errorMsg) => console.error(errorMsg));
    }, [setDemoState]);
    (0, react_1.useEffect)(() => {
        setTimeout(() => {
            mainBox.current.style.top = "0px";
        }, 1000);
        startChainTimeout(0, speeds);
    }, [startChainTimeout]);
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { ref: mainBox, sx: {
            width: isLarge ? "100%" : "80%",
            padding: "15px",
            margin: "0px auto",
            marginTop: "20px",
            justifySelf: "center",
            boxShadow: main_scss_1.default.mainShadow,
            backgroundColor: main_scss_1.default.backgroundColor2,
            transition: "0.5s",
            position: "relative",
            top: "-2500px",
            height: { xs: "450px", md: "335px" }
        }, children: [(0, jsx_runtime_1.jsx)(Demo_js_1.default, { state: demoState }), (0, jsx_runtime_1.jsxs)(material_1.Grid, { container: true, sx: {
                    justifyContent: 'space-between',
                    height: { xs: "auto", md: "100%" },
                    flexDirection: { xs: "column", md: "row" }
                }, children: [(0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, sx: {
                            width: { xs: "100%", md: "30%" },
                            height: { xs: "50%", md: "100%" },
                            paddingRight: "15px",
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "center"
                        }, children: (0, jsx_runtime_1.jsx)(material_1.Avatar, { src: link, sx: {
                                width: { xs: "200px", md: "250px" },
                                height: { xs: "240px", md: "300px" },
                                borderRadius: "0px",
                                transition: "1s",
                                "&:hover": {
                                    filter: "grayscale(0%)",
                                }
                            } }) }), (0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, sx: {
                            width: { xs: "100%", md: "70%" },
                            fontSize: { xs: "13px", sm: "16px", md: "20px" },
                            fontWeight: "900",
                            height: { xs: "50%", md: "100%" },
                            pt: { xs: "15px", md: 0 },
                            color: main_scss_1.default.textColor2,
                            display: "flex",
                            alignItems: "center",
                            textShadow: "1px 1px 1px #CE5937"
                        }, children: info ?
                            (0, jsx_runtime_1.jsx)(react_simple_typewriter_1.Typewriter, { words: [info], typeSpeed: speed })
                            : null })] })] }));
}
;
exports.default = About;
