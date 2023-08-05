import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
const Skill = ({ zIndex, imageSource, percentage, top, left }) => (_jsx(_Fragment, { children: _jsxs(motion.div, { className: "skill_main", style: {
            top,
            left,
            zIndex
        }, whileHover: {
            scale: 1.1,
            zIndex: 4,
            transition: {
                duration: 1
            }
        }, children: [_jsx(CircularProgress, { className: "skill_main_circular", value: percentage, variant: "determinate" }), _jsx("img", { alt: "My skill", src: imageSource, className: "skill_main_image" })] }) }));
export default Skill;