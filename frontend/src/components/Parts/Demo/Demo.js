import { jsx as _jsx } from "react/jsx-runtime";
import { Box, CircularProgress } from "@mui/material";
const Demo = ({ state }) => {
    return (_jsx(Box, { sx: {
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
        }, children: _jsx(CircularProgress, {}) }));
};
export default Demo;
