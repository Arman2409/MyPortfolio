import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useRef, useCallback } from "react";
import { Avatar, Box, Grid, useMediaQuery } from "@mui/material";
import { Typewriter } from 'react-simple-typewriter';
import mainStyles from "../../../../styles/main.scss";
import Demo from "../../../Parts/Demo/Demo.js";
import { fetchData } from "../../../../API/fetchData";
const speeds = [
    {
        duration: 2,
        speed: 100
    },
    {
        duration: 2,
        speed: 10
    },
    {
        duration: 5,
        speed: 1
    }
];
function About() {
    const mainBox = useRef(null);
    const [info, setInfo] = useState("");
    const [link, setLink] = useState("");
    const [demoState, setDemoState] = useState(true);
    const [speed, setSpeed] = useState(100);
    const isLarge = useMediaQuery("(max-width:1100px)");
    const startChainTimeout = useCallback((count = 0, speeds) => {
        if (!speeds[count]) {
            return;
        }
        ;
        setTimeout(() => {
            setSpeed(speeds[count].speed);
            return startChainTimeout(count + 1, speeds);
        }, speeds[count].duration * 1000);
    }, [setSpeed]);
    useEffect(() => {
        setDemoState(true);
        fetchData("getData", "about").then((res) => {
            const { link = "", data = "" } = res[0];
            setInfo(data);
            setLink(link);
            setDemoState(false);
        }).catch((errorMsg) => console.error(errorMsg));
    }, [setDemoState]);
    useEffect(() => {
        setTimeout(() => {
            mainBox.current.style.top = "0px";
        }, 1000);
        startChainTimeout(0, speeds);
    }, [startChainTimeout]);
    return (_jsxs(Box, { ref: mainBox, sx: {
            width: isLarge ? "100%" : "80%",
            padding: "15px",
            margin: "0px auto",
            marginTop: "20px",
            justifySelf: "center",
            boxShadow: mainStyles.mainShadow,
            backgroundColor: mainStyles.backgroundColor2,
            transition: "0.5s",
            position: "relative",
            top: "-2500px",
            height: { xs: "450px", md: "335px" }
        }, children: [_jsx(Demo, { state: demoState }), _jsxs(Grid, { container: true, sx: {
                    justifyContent: 'space-between',
                    height: { xs: "auto", md: "100%" },
                    flexDirection: { xs: "column", md: "row" }
                }, children: [_jsx(Grid, { item: true, sx: {
                            width: { xs: "100%", md: "30%" },
                            height: { xs: "50%", md: "100%" },
                            paddingRight: "15px",
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "center"
                        }, children: _jsx(Avatar, { src: link, sx: {
                                width: { xs: "200px", md: "250px" },
                                height: { xs: "240px", md: "300px" },
                                borderRadius: "0px",
                                transition: "1s",
                                "&:hover": {
                                    filter: "grayscale(0%)",
                                }
                            } }) }), _jsx(Grid, { item: true, sx: {
                            width: { xs: "100%", md: "70%" },
                            fontSize: { xs: "13px", sm: "16px", md: "20px" },
                            fontWeight: "900",
                            height: { xs: "50%", md: "100%" },
                            pt: { xs: "15px", md: 0 },
                            color: mainStyles.textColor2,
                            display: "flex",
                            alignItems: "center",
                            textShadow: "1px 1px 1px #CE5937"
                        }, children: info ?
                            _jsx(Typewriter, { words: [info], typeSpeed: speed })
                            : null })] })] }));
}
;
export default About;
