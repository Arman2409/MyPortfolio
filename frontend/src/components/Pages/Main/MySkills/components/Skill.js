"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const framer_motion_1 = require("framer-motion");
const Skill = ({ zIndex, source: imageSource, percentage, top, left }) => ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "skill_main", style: {
        top,
        left,
        zIndex
    }, whileHover: {
        scale: 1.1,
        zIndex: 4,
        transition: {
            duration: 1
        }
    }, children: [(0, jsx_runtime_1.jsx)(material_1.CircularProgress, { className: "skill_main_circular", value: percentage, variant: "determinate" }), (0, jsx_runtime_1.jsx)("img", { alt: "My skill", src: imageSource, className: "skill_main_image" })] }));
exports.default = Skill;
