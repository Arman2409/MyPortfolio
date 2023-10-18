"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const SimCardDownload_1 = __importDefault(require("@mui/icons-material/SimCardDownload"));
const react_2 = require("react");
const Demo_1 = __importDefault(require("../../../Parts/Demo/Demo"));
const main_scss_1 = __importDefault(require("../../../../styles/main.scss"));
const fetchData_1 = require("../../../../API/fetchData");
const DownloadCV = () => {
    const mainCont = (0, react_1.useRef)(null);
    const [cvLink, setCvLink] = (0, react_1.useState)("");
    const [demoState, setDemoState] = (0, react_1.useState)(true);
    (0, react_2.useEffect)(() => {
        setTimeout(() => {
            mainCont.current.style.top = "0px";
        }, 1000);
        setDemoState(true);
        (0, fetchData_1.fetchData)("getData", "cv").then(({ link }) => {
            setCvLink(link);
            setDemoState(false);
        }).catch((errorMsg) => console.error(errorMsg));
    }, [setDemoState]);
    return ((0, jsx_runtime_1.jsxs)(material_1.Grid, { ref: mainCont, container: true, className: "download-cv-container", sx: {
            transition: "0.5s",
            position: "relative",
            top: "-2500px",
            height: "160px",
            width: { xs: "60%", md: "40%" },
            margin: "50px 0",
            backgroundColor: main_scss_1.default.backgroundColor2,
            border: "1px solid",
            flexDirection: { xs: "column", md: "row" },
            borderColor: main_scss_1.default.borderColor1,
            boxShadow: main_scss_1.default.mainShadow
        }, children: [(0, jsx_runtime_1.jsx)(Demo_1.default, { state: demoState }), (0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, sx: {
                    color: main_scss_1.default.textColor1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: { xs: "100%", md: "60%" },
                    height: { xs: "60%", md: "100%" }
                }, children: (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h4", fontFamily: "'Pacifico', cursive;", children: "Download my CV" }) }), (0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, sx: {
                    width: { xs: "100%", md: "40%" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "1s",
                    height: { xs: "40%", md: "100%" }
                }, children: (0, jsx_runtime_1.jsx)(material_1.Link, { href: cvLink, download: "CV.pdf", underline: "none", sx: {
                        width: "auto",
                        height: "auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: main_scss_1.default.textColor2
                    }, children: (0, jsx_runtime_1.jsxs)(material_1.Button, { variant: "contained", sx: {
                            backgroundColor: main_scss_1.default.backgroundColor1,
                            opacity: 1,
                            color: main_scss_1.default.textColor2,
                            animationName: "button",
                            animationDuration: "1s",
                            animationIterationCount: "infinite",
                            animationDirection: "alternate",
                            "@keyframes button": {
                                from: {
                                    borderRadius: "9% 71% 23% 77% / 29% 40% 60% 71%"
                                },
                                to: {
                                    borderRadius: "58% 11% 59% 8% / 29% 40% 60% 71%"
                                }
                            },
                        }, children: ["Download", (0, jsx_runtime_1.jsx)(SimCardDownload_1.default, { sx: {
                                    color: main_scss_1.default.textColor2
                                } })] }) }) })] }));
};
exports.default = DownloadCV;
