import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Typography, Grid, useMediaQuery } from "@mui/material";
import mainStyles from "../../../../../styles/main.scss";
const levelsArray = ["A1", "A2", "B1", "B2", "C1", "C2"];
const LanguageSkill = ({ language, level }) => {
    const [levelNumber, setLevelNumber] = useState(0);
    const [colorPercentage, setColorPercentage] = useState(0);
    const isSmall = useMediaQuery("(max-width:500px)");
    useEffect(() => {
        const ordersCount = levelsArray.length;
        const order = levelsArray.indexOf(level) + 1;
        if (!level)
            setLevelNumber(0);
        else
            setLevelNumber(order);
        setColorPercentage(20 + (80 - ((ordersCount - order) * 13.25)));
    }, [level, setLevelNumber]);
    return (_jsxs(Grid, { container: true, sx: {
            backgroundColor: mainStyles.backgroundColor1,
            height: "50px",
            alignItems: "center",
            justifyContent: "space-evenly",
            pl: isSmall ? "5px" : "25px",
            my: "20px",
            border: `0.5px solid ${mainStyles.textColor1}`,
            borderRadius: "10px",
            backgroundImage: `-webkit-linear-gradient(left, ${mainStyles.borderColor1}, ${mainStyles.borderColor1} ${colorPercentage}%, transparent ${colorPercentage}%, transparent 100%)`,
            width: "100%",
        }, children: [_jsx(Grid, { item: true, width: "20%", sx: {
                    height: { xs: "50%", md: "100%" },
                    display: "flex",
                    alignItems: "center"
                }, children: _jsx(Typography, { color: mainStyles.backgroundColor1, variant: "h6", fontSize: isSmall ? 12 : 16, fontWeight: 900, children: language }) }), _jsx(Grid, { item: true, container: true, width: "80%", sx: {
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    height: { xs: "50%", md: "100%" }
                }, children: levelsArray.map((lvl, key) => (_jsx(Typography, { fontWeight: 900, sx: {
                        color: levelNumber > levelsArray.indexOf(lvl) ? mainStyles.textColor2 : mainStyles.textColor1,
                        transition: "0.5s",
                    }, children: lvl }, key))) })] }));
};
export default LanguageSkill;
