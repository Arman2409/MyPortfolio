import { useEffect, useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { useMediaQuery } from "@mui/material";
import axios from "axios";

import Link from "./Link";
import { LinkTypeProps } from "../../../../types/propTypes";
import { fetchData } from "../../../../API/fetchData";

const iconsMap = new Map([
    ["facebook", <FacebookIcon className="link_icon" />],
    ["linkedin", <LinkedInIcon className="link_icon" />],
    ["github", <GitHubIcon className="link_icon" />],
])

const Links = () => {
    const [links, setLinks] = useState<LinkTypeProps[]>([]);

    const isLarge = useMediaQuery("(max-width:1100px)");

    useEffect(() => {
        fetchData("getData", "links").then((data: LinkTypeProps[]) => {
            if (data.length > 5) data = data.splice(0, 5)
            setLinks(data.map(elem => {
                if (iconsMap.get(elem.name)) {
                    return {
                        ...elem,
                        image: iconsMap.get(elem.name)
                    }
                }
                return {
                    ...elem,
                    image: <LanguageIcon className="link_icon" />
                }
            }))
        }
        ).catch((errorMsg:string) => console.error(errorMsg))
    }, [])

    return (
        <div
            className="links"
            style={{
                width: isLarge ? "80%" : "40%"
            }}
        >
            {links.map(({ name, link, image }, index) => (
                <Link
                    key={index}
                    image={image}
                    link={link}
                    name={name}
                />))
            }
        </div>
    )
}

export default Links;