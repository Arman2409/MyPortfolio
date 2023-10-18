import { jsx as _jsx } from "react/jsx-runtime";
import { IconButton } from "@mui/material";
const LinkComponent = ({ image, link, name }) => {
    return (_jsx(IconButton, { href: link, target: "_blank", className: "link", children: image }));
};
export default LinkComponent;
