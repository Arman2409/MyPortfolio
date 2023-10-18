"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Facebook_1 = __importDefault(require("@mui/icons-material/Facebook"));
const LinkedIn_1 = __importDefault(require("@mui/icons-material/LinkedIn"));
const GitHub_1 = __importDefault(require("@mui/icons-material/GitHub"));
const Language_1 = __importDefault(require("@mui/icons-material/Language"));
const material_1 = require("@mui/material");
const Link_1 = __importDefault(require("./Link"));
const fetchData_1 = require("../../../../API/fetchData");
const iconsMap = new Map([
    ["facebook", (0, jsx_runtime_1.jsx)(Facebook_1.default, { className: "link_icon" })],
    ["linkedin", (0, jsx_runtime_1.jsx)(LinkedIn_1.default, { className: "link_icon" })],
    ["github", (0, jsx_runtime_1.jsx)(GitHub_1.default, { className: "link_icon" })],
]);
const Links = () => {
    const [links, setLinks] = (0, react_1.useState)([]);
    const isLarge = (0, material_1.useMediaQuery)("(max-width:1100px)");
    (0, react_1.useEffect)(() => {
        (0, fetchData_1.fetchData)("getData", "links").then((data) => {
            if (data.length > 5)
                data = data.splice(0, 5);
            setLinks(data.map(elem => {
                if (iconsMap.get(elem.name)) {
                    return {
                        ...elem,
                        image: iconsMap.get(elem.name)
                    };
                }
                return {
                    ...elem,
                    image: (0, jsx_runtime_1.jsx)(Language_1.default, { className: "link_icon" })
                };
            }));
        }).catch((errorMsg) => console.error(errorMsg));
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { className: "links", style: {
            width: isLarge ? "80%" : "40%"
        }, children: links.map(({ name, link, image }, index) => ((0, jsx_runtime_1.jsx)(Link_1.default, { image: image, link: link, name: name }, index))) }));
};
exports.default = Links;
