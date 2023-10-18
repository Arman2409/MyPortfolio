"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Copyright_1 = __importDefault(require("@mui/icons-material/Copyright"));
const main_scss_1 = __importDefault(require("../../../styles/main.scss"));
const Footer = () => {
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
            display: "flex",
            position: "absolute",
            bottom: 0,
            width: "100%",
            justifyContent: "flex-start",
            flexDirection: "column",
            alignItems: "center",
            height: "auto",
            backgroundColor: main_scss_1.default.backgroundColor2
        }, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "20px"
                }, children: [(0, jsx_runtime_1.jsx)(material_1.Link, { href: "malto:armanghazaryan2409@gmail.com", underline: "none", children: (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "p", color: main_scss_1.default.textColor1, children: "armanghazaryan2409@gmail.com" }) }), (0, jsx_runtime_1.jsx)(material_1.Link, { href: "tel:armanghazaryan2409@gmail.com", underline: "none", children: (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "p", fontSize: "11px", color: main_scss_1.default.textColor1, children: "+37496503823" }) })] }), (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                    display: "flex",
                    color: main_scss_1.default.textColor2,
                    mb: "15px"
                }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { sx: {
                            marginLeft: "10px"
                        }, children: "Copyright" }), (0, jsx_runtime_1.jsx)(Copyright_1.default, { sx: { m: "0 7px" } }), (0, jsx_runtime_1.jsx)(material_1.Typography, { children: "Ghazaryan Arman 2022 All rights reserved" })] })] }));
};
exports.default = Footer;
