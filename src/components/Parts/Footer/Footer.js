import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, Box, Link } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import mainStyles from "../../../styles/main.scss";
const Footer = () => {
    return (_jsxs(Box, { sx: {
            display: "flex",
            position: "absolute",
            bottom: 0,
            width: "100%",
            justifyContent: "flex-start",
            flexDirection: "column",
            alignItems: "center",
            height: "auto",
            backgroundColor: mainStyles.backgroundColor2
        }, children: [_jsxs(Box, { sx: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "20px"
                }, children: [_jsx(Link, { href: "malto:armanghazaryan2409@gmail.com", underline: "none", children: _jsx(Typography, { variant: "p", color: mainStyles.textColor1, children: "armanghazaryan2409@gmail.com" }) }), _jsx(Link, { href: "tel:armanghazaryan2409@gmail.com", underline: "none", children: _jsx(Typography, { variant: "p", fontSize: "11px", color: mainStyles.textColor1, children: "+37496503823" }) })] }), _jsxs(Box, { sx: {
                    display: "flex",
                    color: mainStyles.textColor2,
                    mb: "15px"
                }, children: [_jsx(Typography, { sx: {
                            marginLeft: "10px"
                        }, children: "Copyright" }), _jsx(CopyrightIcon, { sx: { m: "0 7px" } }), _jsx(Typography, { children: "Ghazaryan Arman 2022 All rights reserved" })] })] }));
};
export default Footer;
