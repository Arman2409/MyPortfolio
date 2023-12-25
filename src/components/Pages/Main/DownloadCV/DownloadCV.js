import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { Button, Grid, Link, Typography } from "@mui/material";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { useEffect } from "react";
import Demo from "../../../Parts/Demo/Demo";
import mainStyles from "../../../../styles/main.scss";
import { fetchData } from "../../../../API/fetchData";
const DownloadCV = () => {
    const mainCont = useRef(null);
    const [cvLink, setCvLink] = useState("");
    const [demoState, setDemoState] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            mainCont.current.style.top = "0px";
        }, 1000);
        setDemoState(true);
        fetchData("getData", "cv").then(({ link }) => {
            setCvLink(link);
            setDemoState(false);
        }).catch((errorMsg) => console.error(errorMsg));
    }, [setDemoState]);
    return (_jsxs(Grid, { ref: mainCont, container: true, className: "download-cv-container", sx: {
            transition: "0.5s",
            position: "relative",
            top: "-2500px",
            height: "160px",
            width: { xs: "60%", md: "40%" },
            margin: "50px 0",
            backgroundColor: mainStyles.backgroundColor2,
            border: "1px solid",
            flexDirection: { xs: "column", md: "row" },
            borderColor: mainStyles.borderColor1,
            boxShadow: mainStyles.mainShadow
        }, children: [_jsx(Demo, { state: demoState }), _jsx(Grid, { item: true, sx: {
                    color: mainStyles.textColor1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: { xs: "100%", md: "60%" },
                    height: { xs: "60%", md: "100%" }
                }, children: _jsx(Typography, { variant: "h4", fontFamily: "'Pacifico', cursive;", children: "Download my CV" }) }), _jsx(Grid, { item: true, sx: {
                    width: { xs: "100%", md: "40%" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "1s",
                    height: { xs: "40%", md: "100%" }
                }, children: _jsx(Link, { href: cvLink, download: "CV.pdf", underline: "none", sx: {
                        width: "auto",
                        height: "auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: mainStyles.textColor2
                    }, children: _jsxs(Button, { variant: "contained", sx: {
                            backgroundColor: mainStyles.backgroundColor1,
                            opacity: 1,
                            color: mainStyles.textColor2,
                            animationName: "button",
                            animationDuration: "1s",
                            animationIterationCount: "infinite",
                            animationDirection: "alternate",
                            "@keyframes button": {
                                from: {
                                    borderRadius: "9% 71% 23% 77% / 29% 40% 60% 71%"
                                },
                                to: {
                                    borderRadius: "58% 11% 59% 8% / 29% 40% 60% 71%"
                                }
                            },
                        }, children: ["Download", _jsx(SimCardDownloadIcon, { sx: {
                                    color: mainStyles.textColor2
                                } })] }) }) })] }));
};
export default DownloadCV;
