import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { useMediaQuery } from "@mui/material";
import axios from "axios";
import Link from "./Link";
const iconsMap = new Map([
    ["facebook", _jsx(FacebookIcon, { className: "link_icon" })],
    ["linkedin", _jsx(LinkedInIcon, { className: "link_icon" })],
    ["github", _jsx(GitHubIcon, { className: "link_icon" })],
]);
const Links = () => {
    const [links, setLinks] = useState([]);
    const isLarge = useMediaQuery("(max-width:1100px)");
    useEffect(() => {
        axios.get("/getData:links").then(({ data }) => {
            if (data) {
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
                        image: _jsx(LanguageIcon, { className: "link_icon" })
                    };
                }));
            }
        }).catch(e => console.error(e.message));
    }, []);
    return (_jsx("div", { className: "links", style: {
            width: isLarge ? "80%" : "40%"
        }, children: links.map(({ name, link, image }, index) => (_jsx(Link, { image: image, link: link, name: name }, index))) }));
};
export default Links;
