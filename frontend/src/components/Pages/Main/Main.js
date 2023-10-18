import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Box } from "@mui/material";
import About from "./About/About";
import MySkills from "./MySkills/MySkills";
import LanguageSkills from "./LanguageSkills/LanguageSkills";
function MainPage() {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    return (_jsxs(Box, { sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
        }, children: [_jsx(About, {}), _jsx(MySkills, {}), _jsx(LanguageSkills, {})] }));
}
export default MainPage;
