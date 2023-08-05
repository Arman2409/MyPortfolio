import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useRef, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import mainStyles from "../../../../styles/main.scss";
import Demo from "../../../Parts/Demo/Demo";
import Skill from "./components/Skill";
import { getDimesions, getResponsiveSizes } from "./utils/functions";
function MySkills() {
    const mainCont = useRef(null);
    const [skills, setSkills] = useState([]);
    const [demoState, setDemoState] = useState(true);
    const [dimensionsArr, setDimensionsArr] = useState([]);
    const isExtraLarge = useMediaQuery("(max-width:1350px)");
    const isLarge = useMediaQuery("(max-width:1100px)");
    const isMedium = useMediaQuery("(max-width:800px)");
    const isSmall = useMediaQuery("(max-width:500px)");
    useEffect(() => {
        setTimeout(() => {
            mainCont.current.style.top = "0px";
        }, 1000);
        setDemoState(true);
        axios.get("/getData:skills").then(resp => {
            setSkills(resp.data);
            setDemoState(false);
            const { width, height, radius } = getResponsiveSizes(isSmall, isMedium, isLarge, isExtraLarge);
            const dimsArr = getDimesions([0, width], [radius, height - 2 * radius], radius, resp.data.length);
            setDimensionsArr(dimsArr);
        });
    }, [setSkills, isSmall, isMedium, isLarge, isExtraLarge]);
    useEffect(() => {
        const { width, height, radius } = getResponsiveSizes(isSmall, isMedium, isLarge, isExtraLarge);
        const dimsArr = getDimesions([0, width], [radius, height - 2 * radius], radius, skills.length);
        setDimensionsArr(dimsArr);
    }, [isSmall, isMedium, isLarge, skills, isExtraLarge]);
    return (_jsxs(Box, { ref: mainCont, sx: {
            transition: "0.5s",
            position: "relative",
            top: "-2500px",
            width: isSmall || isMedium || isLarge ? "100%" : "calc(80% + 40px)",
            height: isSmall ? 1200 : isMedium ? 1000 : 800 + "px",
            marginTop: "50px",
        }, children: [_jsx(Demo, { state: demoState }), _jsx(Typography, { variant: "h4", color: mainStyles.textColor1, fontFamily: "'Pacifico', cursive;", sx: {
                    fontSize: "35px",
                    boxShadow: mainStyles.mainShadow,
                    textAlign: "center",
                    lineHeight: "70px",
                    margin: "0 auto",
                    width: isSmall ? "100%" : isMedium ? "80%" : "100%",
                    backgroundColor: mainStyles.backgroundColor2,
                }, children: "My Technical Skills" }), skills.map((elem, index) => {
                const zIndex = Math.random() * 3;
                return _jsx(Skill, { zIndex: zIndex, top: dimensionsArr[index].y, left: dimensionsArr[index].x, imageSource: elem.source, percentage: elem.percentage }, index);
            })] }));
}
export default MySkills;