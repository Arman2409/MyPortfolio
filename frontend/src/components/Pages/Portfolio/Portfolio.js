"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const PortfolioItem_1 = __importDefault(require("./PortfolioItem/PortfolioItem"));
const fetchData_1 = require("../../../API/fetchData");
const Portfolio = () => {
    const mainBox = (0, react_1.useRef)(null);
    const [itemData, setItemData] = (0, react_1.useState)([]);
    const isMedium = (0, material_1.useMediaQuery)("(max-width:1100px)");
    const isSmall = (0, material_1.useMediaQuery)("(max-width:500px)");
    (0, react_1.useEffect)(() => {
        window.scrollTo({ top: 0 });
        setTimeout(() => {
            mainBox.current.style.top = "0px";
        }, 1000);
        (0, fetchData_1.fetchData)("getData", "portfolio").then((data) => {
            if (data.length) {
                let newData = data.map((elem, index) => {
                    const newElem = elem;
                    newElem.index = index;
                    return newElem;
                });
                newData = newData.sort((prev, next) => prev.order - next.order);
                if (newData.length > 6) {
                    newData = newData.splice(0, 6);
                }
                setItemData(newData);
            }
        }).catch((errorMsg) => console.error(errorMsg));
    }, [setItemData]);
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
            height: isSmall ? itemData.length * 280 + "px" : isMedium ? itemData.length * 200 + "px" : "500px",
            width: "100%",
            display: "flex",
            justifyContent: "center"
        }, children: (0, jsx_runtime_1.jsx)(material_1.Box, { ref: mainBox, sx: {
                transition: "0.5s",
                maxWidth: "100%",
                width: isSmall ? "180px" : isMedium ? "500px" : itemData.length * 175 + "px",
                height: "0",
                position: "absolute",
                top: "-2500px",
                margin: "50px auto",
            }, children: itemData.map(({ img, link, description }, index) => {
                let left;
                if (isSmall) {
                    left = 0;
                }
                else if (isMedium) {
                    if (Number.isInteger(index / 2)) {
                        left = -25;
                    }
                    else {
                        left = 150 - 25;
                    }
                }
                else {
                    if (index === 0) {
                        left = -50;
                    }
                    else {
                        left = index * 150 - 50;
                    }
                }
                let top;
                if (isSmall) {
                    if (index === 0) {
                        top = 75;
                    }
                    else {
                        top = index * 280 + 75;
                    }
                }
                else if (isMedium) {
                    top = index * 145;
                }
                else {
                    if (Number.isInteger(index / 2)) {
                        top = 0;
                    }
                    else {
                        top = 145;
                    }
                }
                return (0, jsx_runtime_1.jsx)(PortfolioItem_1.default, { img: img, description: description, link: link, left: left, top: top }, index);
            }) }) }));
};
exports.default = Portfolio;
