import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback } from "react";
import { Box, TextField, Container, Typography, Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import mainStyles from "../../../../styles/main.scss";
import { fetchData } from "../../../../API/fetchData";
const MessageMe = () => {
    const [message, setMessage] = useState("");
    const [dotCount, setDotCount] = useState(0);
    const dotsInterval = useRef(null);
    const isLarge = useMediaQuery("(max-width:1100px)");
    const submitMessage = useCallback((e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const data = Object.fromEntries(form);
        fetchData("sendMessage", "about", data).then(resp => {
            setMessage(resp);
        }).catch(msg => console.error(msg));
    }, [setMessage]);
    useEffect(() => {
        dotsInterval.current = setInterval(() => {
            setDotCount(current => {
                if (current === 5) {
                    return 1;
                }
                return current + 1;
            });
        }, 750);
    }, [setDotCount]);
    useEffect(() => {
        return () => clearInterval(dotsInterval.current);
    }, []);
    return (_jsxs(Container, { component: "form", onSubmit: submitMessage, sx: {
            border: `1px solid ${mainStyles.borderColor1}`,
            padding: "20px",
            display: "flex",
            height: "500px",
            width: isLarge ? "100%" : "80%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: mainStyles.backgroundColor2,
            boxShadow: mainStyles.mainShadow
        }, children: [_jsx(Typography, { variant: "h3", fontFamily: "'Pacifico', cursive;", color: mainStyles.textColor1, sx: {
                    mb: "10px"
                }, children: "Message me" }), _jsx(TextField, { required: true, name: "name", placeholder: "Your name" + ".".repeat(dotCount), sx: {
                    width: "80%",
                    backgroundColor: mainStyles.backgroundColor1,
                    border: `1px solid ${mainStyles.borderColor2}`,
                    "& input": {
                        color: true ? mainStyles.textColor1 : null,
                    },
                    "& input::placeholder": {
                        opacity: 1,
                        fontWeight: 900
                    }
                } }), _jsx(TextField, { required: true, type: "email", name: "email", placeholder: "Your email" + ".".repeat(dotCount), sx: {
                    width: "80%",
                    backgroundColor: mainStyles.backgroundColor1,
                    border: `1px solid ${mainStyles.borderColor2}`,
                    "& input": {
                        color: true ? mainStyles.textColor1 : null,
                    },
                    "& input::placeholder": {
                        opacity: 1,
                        fontWeight: 900
                    }
                } }), _jsx(TextField, { required: true, multiline: true, rows: 5, inputProps: { style: { color: mainStyles.textColor1 } }, name: "message", placeholder: "Your message" + ".".repeat(dotCount), sx: {
                    width: "80%",
                    backgroundColor: mainStyles.backgroundColor1,
                    border: `1px solid ${mainStyles.borderColor2}`,
                    "& textarea": {
                        color: true ? mainStyles.textColor1 : null,
                    },
                    "& textarea::placeholder": {
                        opacity: 1,
                        fontWeight: 900
                    }
                } }), _jsxs(Box, { sx: {
                    width: "80%",
                    height: "36.5px",
                    position: "relative"
                }, children: [_jsx(Typography, { color: message === "Message sent" ? "green" : "orangered", children: message }), _jsx(Button, { variant: "contained", type: "submit", sx: {
                            color: mainStyles.textColor2,
                            animationName: "button",
                            animationDuration: "1s",
                            animationIterationCount: "infinite",
                            animationDirection: "alternate",
                            "@keyframes button": {
                                from: {
                                    borderRadius: "58% 11% 47% 92% / 78% 68% 18% 32%"
                                },
                                to: {
                                    borderRadius: "85% 47% 85% 57% / 69% 39% 85% 15%"
                                }
                            },
                            position: "absolute",
                            right: 0,
                            top: 0,
                            backgroundColor: mainStyles.backgroundColor1,
                            opacity: 1,
                            fontWeight: 900
                        }, children: "Submit" })] })] }));
};
export default MessageMe;
