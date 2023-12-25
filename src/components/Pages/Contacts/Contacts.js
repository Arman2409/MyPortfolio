import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import Links from "./components/Links";
import MessageMe from "./components/MessageMe";
const Contacts = () => {
    const mainBox = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            mainBox.current.style.top = "0px";
        }, 1000);
        window.scrollTo({ top: 0 });
    });
    return (_jsxs("div", { ref: mainBox, style: {
            transition: "0.5s",
            position: "relative",
            top: "-2500px",
        }, children: [_jsx(Links, {}), _jsx(MessageMe, {})] }));
};
export default Contacts;
