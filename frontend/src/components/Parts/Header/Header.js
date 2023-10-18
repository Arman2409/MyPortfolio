"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AppBar_1 = __importDefault(require("@mui/material/AppBar"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const Menu_1 = __importDefault(require("@mui/material/Menu"));
const Menu_2 = __importDefault(require("@mui/icons-material/Menu"));
const Container_1 = __importDefault(require("@mui/material/Container"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const react_fast_marquee_1 = __importDefault(require("react-fast-marquee"));
const react_router_dom_1 = require("react-router-dom");
const framer_motion_1 = require("framer-motion");
const main_scss_1 = __importDefault(require("../../../styles/main.scss"));
const pages = ['Main', 'Portfolio', 'Contacts'];
const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = (0, react_1.useState)(null);
    const [zerosAndOnes, setZerosAndOnes] = (0, react_1.useState)([]);
    const marquee = (0, react_1.useRef)();
    const zerosAndOnesRef = (0, react_1.useRef)([]);
    const randomBitsInt = (0, react_1.useRef)(null);
    const handleOpenNavMenu = (0, react_1.useCallback)((event) => {
        setAnchorElNav(event.currentTarget);
    }, [setAnchorElNav]);
    const handleCloseNavMenu = (0, react_1.useCallback)(() => {
        setAnchorElNav(null);
    }, [setAnchorElNav]);
    (0, react_1.useEffect)(() => {
        setTimeout(() => {
            marquee.current = document.querySelectorAll(".marquee");
        }, 1500);
        randomBitsInt.current = setInterval(() => {
            const random = Math.round(Math.random());
            if (zerosAndOnesRef.current.length > 250) {
                clearInterval(randomBitsInt.current);
                return;
            }
            zerosAndOnesRef.current.push(random);
            setZerosAndOnes([...zerosAndOnesRef.current]);
        }, 700);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { sx: {
                    height: "125px",
                    position: "fixed",
                    width: "100%",
                    zIndex: 5
                }, children: [(0, jsx_runtime_1.jsx)(AppBar_1.default, { position: "static", sx: {
                            m: 0,
                            backgroundColor: main_scss_1.default.backgroundColor2,
                            height: "100px",
                            padding: "0px"
                        }, children: (0, jsx_runtime_1.jsx)(Container_1.default, { maxWidth: "xl", sx: {
                                height: "100%"
                            }, children: (0, jsx_runtime_1.jsxs)(Toolbar_1.default, { disableGutters: true, sx: {
                                    height: "100%",
                                }, children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", children: (0, jsx_runtime_1.jsx)("img", { src: "/logo.png", alt: "My Portfolio", style: {
                                                height: "100px",
                                                width: "120px"
                                            } }) }), (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: "flex-end" }, children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, { size: "large", "aria-label": "account of current user", "aria-controls": "menu-appbar", "aria-haspopup": "true", onClick: handleOpenNavMenu, sx: {
                                                    color: main_scss_1.default.textColor2
                                                }, children: (0, jsx_runtime_1.jsx)(Menu_2.default, {}) }), (0, jsx_runtime_1.jsx)(Menu_1.default, { id: "menu-appbar", anchorEl: anchorElNav, anchorOrigin: {
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
                                                        backgroundColor: main_scss_1.default.textColor2
                                                    }
                                                }, children: pages.map((page, index) => ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: page === "Main" ? "/" : `/${page.toLowerCase()}`, style: {
                                                        textDecoration: "none",
                                                    }, children: (0, jsx_runtime_1.jsx)(MenuItem_1.default, { onClick: handleCloseNavMenu, sx: {
                                                            backgroundColor: main_scss_1.default.textColor2,
                                                            width: "150px",
                                                            "&:hover": {
                                                                backgroundColor: main_scss_1.default.backgroundColor2,
                                                                transition: "0.2s",
                                                                boxSizing: "border-box",
                                                                border: `0.25px solid ${main_scss_1.default.borderColor1}`,
                                                                "& .MuiTouchRipple-root": {
                                                                    display: "none"
                                                                }
                                                            }
                                                        }, children: (0, jsx_runtime_1.jsx)(Typography_1.default, { textAlign: "center", sx: {
                                                                color: main_scss_1.default.textColor1,
                                                                fontSize: "17px"
                                                            }, children: page === "Contacts" ? "Contact me" : page === "Portfolio" ? "Projects" : page }) }, page) }, index))) })] }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { flexGrow: 1,
                                            height: "100%",
                                            marginLeft: '25px',
                                            display: { xs: 'none', md: 'flex' },
                                        }, children: pages.map((page, index) => ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: page === "Main" ? "/" : `/${page.toLowerCase()}`, style: {
                                                textDecoration: "none"
                                            }, children: (0, jsx_runtime_1.jsx)(Button_1.default, { className: "menu-button", onClick: handleCloseNavMenu, sx: {
                                                    fontFamily: "'Pacifico', cursive;",
                                                    px: 2,
                                                    height: "100%",
                                                    textDecoration: "none",
                                                    display: 'block',
                                                    color: main_scss_1.default.textColor2,
                                                    textShadow: "0 0 10px #FFFFFF",
                                                }, children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.p, { className: "menu_item_text", whileHover: {
                                                        transform: ["rotateZ(5deg)", "rotateZ(-10deg)", "rotateZ(5deg)"],
                                                        transition: {
                                                            duration: 1
                                                        }
                                                    }, children: page === "Contacts" ? "Contact me" : page === "Portfolio" ? "Projects" : page }) }, page) }, index))) })] }) }) }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                            height: "25px",
                        }, children: (0, jsx_runtime_1.jsx)(react_fast_marquee_1.default, { direction: 'right', loop: false, speed: 100, children: zerosAndOnes, style: {
                                backgroundColor: main_scss_1.default.textColor1,
                                opacity: 0.85,
                                color: main_scss_1.default.textColor2,
                                height: "100%"
                            } }) })] }), (0, jsx_runtime_1.jsx)(Box_1.default, { height: "120px", sx: { mb: "25px" } })] }));
};
exports.default = ResponsiveAppBar;
