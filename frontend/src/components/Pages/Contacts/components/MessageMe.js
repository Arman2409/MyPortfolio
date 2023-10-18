"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const material_2 = require("@mui/material");
const main_scss_1 = __importDefault(require("../../../../styles/main.scss"));
const fetchData_1 = require("../../../../API/fetchData");
const MessageMe = () => {
    const [message, setMessage] = (0, react_1.useState)("");
    const [dotCount, setDotCount] = (0, react_1.useState)(0);
    const dotsInterval = (0, react_1.useRef)(null);
    const isLarge = (0, material_2.useMediaQuery)("(max-width:1100px)");
    const submitMessage = (0, react_1.useCallback)((e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const data = Object.fromEntries(form);
        (0, fetchData_1.fetchData)("sendMessage", "about", data).then(resp => {
            setMessage(resp);
        }).catch(msg => console.error(msg));
    }, [setMessage]);
    (0, react_1.useEffect)(() => {
        dotsInterval.current = setInterval(() => {
            setDotCount(current => {
                if (current === 5) {
                    return 1;
                }
                return current + 1;
            });
        }, 750);
    }, [setDotCount]);
    (0, react_1.useEffect)(() => {
        return () => clearInterval(dotsInterval.current);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(material_1.Container, { component: "form", onSubmit: submitMessage, sx: {
            border: `1px solid ${main_scss_1.default.borderColor1}`,
            padding: "20px",
            display: "flex",
            height: "500px",
            width: isLarge ? "100%" : "80%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: main_scss_1.default.backgroundColor2,
            boxShadow: main_scss_1.default.mainShadow
        }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h3", fontFamily: "'Pacifico', cursive;", color: main_scss_1.default.textColor1, sx: {
                    mb: "10px"
                }, children: "Message me" }), (0, jsx_runtime_1.jsx)(material_1.TextField, { required: true, name: "name", placeholder: "Your name" + ".".repeat(dotCount), sx: {
                    width: "80%",
                    backgroundColor: main_scss_1.default.backgroundColor1,
                    border: `1px solid ${main_scss_1.default.borderColor2}`,
                    "& input": {
                        color: true ? main_scss_1.default.textColor1 : null,
                    },
                    "& input::placeholder": {
                        opacity: 1,
                        fontWeight: 900
                    }
                } }), (0, jsx_runtime_1.jsx)(material_1.TextField, { required: true, type: "email", name: "email", placeholder: "Your email" + ".".repeat(dotCount), sx: {
                    width: "80%",
                    backgroundColor: main_scss_1.default.backgroundColor1,
                    border: `1px solid ${main_scss_1.default.borderColor2}`,
                    "& input": {
                        color: true ? main_scss_1.default.textColor1 : null,
                    },
                    "& input::placeholder": {
                        opacity: 1,
                        fontWeight: 900
                    }
                } }), (0, jsx_runtime_1.jsx)(material_1.TextField, { required: true, multiline: true, rows: 5, inputProps: { style: { color: main_scss_1.default.textColor1 } }, name: "message", placeholder: "Your message" + ".".repeat(dotCount), sx: {
                    width: "80%",
                    backgroundColor: main_scss_1.default.backgroundColor1,
                    border: `1px solid ${main_scss_1.default.borderColor2}`,
                    "& textarea": {
                        color: true ? main_scss_1.default.textColor1 : null,
                    },
                    "& textarea::placeholder": {
                        opacity: 1,
                        fontWeight: 900
                    }
                } }), (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                    width: "80%",
                    height: "36.5px",
                    position: "relative"
                }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { color: message === "Message sent" ? "green" : "orangered", children: message }), (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", type: "submit", sx: {
                            color: main_scss_1.default.textColor2,
                            animationName: "button",
                            animationDuration: "1s",
                            animationIterationCount: "infinite",
                            animationDirection: "alternate",
                            "@keyframes button": {
                                from: {
                                    borderRadius: "58% 11% 47% 92% / 78% 68% 18% 32%"
                                },
                                to: {
                                    borderRadius: "85% 47% 85% 57% / 69% 39% 85% 15%"
                                }
                            },
                            position: "absolute",
                            right: 0,
                            top: 0,
                            backgroundColor: main_scss_1.default.backgroundColor1,
                            opacity: 1,
                            fontWeight: 900
                        }, children: "Submit" })] })] }));
};
exports.default = MessageMe;
