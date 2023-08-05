import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import mainStyles from "../../../../styles/main.scss";
import Demo from "../../../Parts/Demo/Demo";
import LanguageSkill from "./components/LanguageSkill";
const LanguageSkills = () => {
    const [demoState, setDemoState] = useState(true);
    const [mySkills, setMySkills] = useState([]);
    const mainCont = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            mainCont.current.style.top = "0px";
        }, 1000);
        setDemoState(true);
        axios.get("/getData:languages").then((res) => {
            setMySkills(res.data);
            setDemoState(false);
        });
    }, []);
    return (_jsxs(Box, { ref: mainCont, sx: {
            transition: "0.5s",
            position: "relative",
            top: "-2500px",
            padding: "20px",
            backgroundColor: mainStyles.backgroundColor2,
            height: "auto",
            margin: "50px 0",
            width: "80%",
            boxShadow: mainStyles.mainShadow,
        }, children: [_jsx(Demo, { state: demoState }), _jsx(Typography, { variant: "h4", color: mainStyles.textColor1, fontFamily: "'Pacifico', cursive;", sx: {
                    fontSize: "35px",
                    textAlign: "center"
                }, children: "My Language Skills" }), mySkills.map((elem, index) => (_jsx(Box, { children: _jsx(LanguageSkill, { language: elem.language, level: elem.level }) }, index)))] }));
};
export default LanguageSkills;
