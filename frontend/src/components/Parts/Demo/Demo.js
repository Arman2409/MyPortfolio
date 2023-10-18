"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Demo = ({ state }) => {
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
            backgroundColor: "black",
            opacity: 0.8,
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 2,
            display: state ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center"
        }, children: (0, jsx_runtime_1.jsx)(material_1.CircularProgress, {}) }));
};
exports.default = Demo;
