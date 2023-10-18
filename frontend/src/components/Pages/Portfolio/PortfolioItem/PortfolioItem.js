"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const PortfolioItem = ({ img, link, description, left, top }) => {
    const takeToLink = (0, react_1.useCallback)(() => {
        const linkEl = document.createElement("a");
        linkEl.setAttribute("href", link);
        linkEl.setAttribute("target", "_blank");
        linkEl.click();
    }, [link]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "portfolio_item", style: {
            left: left + "px",
            top: top + 50 + "px",
        }, onClick: takeToLink, children: [(0, jsx_runtime_1.jsx)("p", { className: "portfolio_item_description", children: description }), (0, jsx_runtime_1.jsx)("img", { alt: "Portfolio item", className: "portfolio_item_image", src: img })] }));
};
exports.default = PortfolioItem;
