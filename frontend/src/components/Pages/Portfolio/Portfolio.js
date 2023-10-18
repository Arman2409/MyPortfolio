import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { Box, useMediaQuery } from '@mui/material';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import { fetchData } from "../../../API/fetchData";
const Portfolio = () => {
    const mainBox = useRef(null);
    const [itemData, setItemData] = useState([]);
    const isMedium = useMediaQuery("(max-width:1100px)");
    const isSmall = useMediaQuery("(max-width:500px)");
    useEffect(() => {
        window.scrollTo({ top: 0 });
        setTimeout(() => {
            mainBox.current.style.top = "0px";
        }, 1000);
        fetchData("getData", "portfolio").then((data) => {
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
    return (_jsx(Box, { sx: {
            height: isSmall ? itemData.length * 280 + "px" : isMedium ? itemData.length * 200 + "px" : "500px",
            width: "100%",
            display: "flex",
            justifyContent: "center"
        }, children: _jsx(Box, { ref: mainBox, sx: {
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
                return _jsx(PortfolioItem, { img: img, description: description, link: link, left: left, top: top }, index);
            }) }) }));
};
export default Portfolio;
