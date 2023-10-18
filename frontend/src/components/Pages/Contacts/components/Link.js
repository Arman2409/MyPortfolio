"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const LinkComponent = ({ image, link, name }) => {
    return ((0, jsx_runtime_1.jsx)(material_1.IconButton, { href: link, target: "_blank", className: "link", children: image }));
};
exports.default = LinkComponent;
