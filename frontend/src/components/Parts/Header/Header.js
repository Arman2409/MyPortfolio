import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState, useCallback, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import mainStyles from "../../../styles/main.scss";
const pages = ['Main', 'Portfolio', 'Contacts'];
const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [zerosAndOnes, setZerosAndOnes] = useState([]);
    const marquee = useRef();
    const zerosAndOnesRef = useRef([]);
    const randomBitsInt = useRef(null);
    const handleOpenNavMenu = useCallback((event) => {
        setAnchorElNav(event.currentTarget);
    }, [setAnchorElNav]);
    const handleCloseNavMenu = useCallback(() => {
        setAnchorElNav(null);
    }, [setAnchorElNav]);
    useEffect(() => {
        setTimeout(() => {
            marquee.current = document.querySelectorAll(".marquee");
        }, 1500);
        randomBitsInt.current = setInterval(() => {
            const random = Math.round(Math.random());
            if (zerosAndOnesRef.current.length > 160) {
                clearInterval(randomBitsInt.current);
                return;
            }
            zerosAndOnesRef.current.push(random);
            setZerosAndOnes([...zerosAndOnesRef.current]);
        }, 1000);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs(Box, { sx: {
                    height: "125px",
                    position: "fixed",
                    width: "100%",
                    zIndex: 5
                }, children: [_jsx(AppBar, { position: "static", sx: {
                            m: 0,
                            backgroundColor: mainStyles.backgroundColor2,
                            height: "100px",
                            padding: "0px"
                        }, children: _jsx(Container, { maxWidth: "xl", sx: {
                                height: "100%"
                            }, children: _jsxs(Toolbar, { disableGutters: true, sx: {
                                    height: "100%",
                                }, children: [_jsx(Link, { to: "/", children: _jsx("img", { src: "/logo.png", alt: "My Portfolio", style: {
                                                height: "100px",
                                                width: "120px"
                                            } }) }), _jsxs(Box, { sx: { flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: "flex-end" }, children: [_jsx(IconButton, { size: "large", "aria-label": "account of current user", "aria-controls": "menu-appbar", "aria-haspopup": "true", onClick: handleOpenNavMenu, sx: {
                                                    color: mainStyles.textColor2
                                                }, children: _jsx(MenuIcon, {}) }), _jsx(Menu, { id: "menu-appbar", anchorEl: anchorElNav, anchorOrigin: {
                                                    vertical: 'bottom',
                                                    horizontal: 'left',
                                                }, keepMounted: true, transformOrigin: {
                                                    vertical: 'top',
                                                    horizontal: 'left',
                                                }, open: Boolean(anchorElNav), onClose: handleCloseNavMenu, sx: {
                                                    marginLeft: "auto",
                                                    padding: 0,
                                                    display: { xs: 'block', md: 'none' },
                                                }, MenuListProps: {
                                                    sx: {
                                                        padding: 0,
                                                        backgroundColor: mainStyles.textColor2
                                                    }
                                                }, children: pages.map((page, index) => (_jsx(Link, { to: page === "Main" ? "/" : `/${page.toLowerCase()}`, style: {
                                                        textDecoration: "none",
                                                    }, children: _jsx(MenuItem, { onClick: handleCloseNavMenu, sx: {
                                                            backgroundColor: mainStyles.textColor2,
                                                            width: "150px",
                                                            "&:hover": {
                                                                backgroundColor: mainStyles.backgroundColor2,
                                                                transition: "0.2s",
                                                                boxSizing: "border-box",
                                                                border: `0.25px solid ${mainStyles.borderColor1}`,
                                                                "& .MuiTouchRipple-root": {
                                                                    display: "none"
                                                                }
                                                            }
                                                        }, children: _jsx(Typography, { textAlign: "center", sx: {
                                                                color: mainStyles.textColor1,
                                                                fontSize: "17px"
                                                            }, children: page }) }, page) }, index))) })] }), _jsx(Box, { sx: { flexGrow: 1,
                                            height: "100%",
                                            marginLeft: '25px',
                                            display: { xs: 'none', md: 'flex' },
                                        }, children: pages.map((page, index) => (_jsx(Link, { to: page === "Main" ? "/" : `/${page.toLowerCase()}`, style: {
                                                textDecoration: "none"
                                            }, children: _jsx(Button, { className: "menu-button", onClick: handleCloseNavMenu, sx: {
                                                    fontFamily: "'Pacifico', cursive;",
                                                    px: 2,
                                                    height: "100%",
                                                    textDecoration: "none",
                                                    display: 'block',
                                                    color: mainStyles.textColor2,
                                                    textShadow: "0 0 10px #FFFFFF",
                                                }, children: _jsx(motion.p, { className: "menu_item_text", whileHover: {
                                                        transform: ["rotateZ(10deg)", "rotateZ(-10deg)", "rotateZ(10deg)"],
                                                        transition: {
                                                            duration: 1
                                                        }
                                                    }, children: page === "Contacts" ? "Contact me" : page }) }, page) }, index))) })] }) }) }), _jsx(Box, { sx: {
                            height: "25px",
                        }, children: _jsx(Marquee, { direction: 'right', loop: false, speed: 100, children: zerosAndOnes, style: {
                                backgroundColor: mainStyles.textColor1,
                                opacity: 0.85,
                                color: mainStyles.textColor2,
                                height: "100%"
                            } }) })] }), _jsx(Box, { height: "120px", sx: { mb: "25px" } })] }));
};
export default ResponsiveAppBar;
