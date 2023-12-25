import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
const PortfolioItem = ({ img, link, description, left, top }) => {
    const takeToLink = useCallback(() => {
        const linkEl = document.createElement("a");
        linkEl.setAttribute("href", link);
        linkEl.setAttribute("target", "_blank");
        linkEl.click();
    }, [link]);
    return (_jsxs("div", { className: "portfolio_item", style: {
            left: left + "px",
            top: top + 50 + "px",
        }, onClick: takeToLink, children: [_jsx("p", { className: "portfolio_item_description", children: description }), _jsx("img", { alt: "Portfolio item", className: "portfolio_item_image", src: img })] }));
};
export default PortfolioItem;
