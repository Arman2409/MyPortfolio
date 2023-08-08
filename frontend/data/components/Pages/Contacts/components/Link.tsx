import React from "react";
import { IconButton } from "@mui/material";

import type { LinkTypeProps } from "../../../../types/propTypes";

const LinkComponent:React.FC<LinkTypeProps> = ({ image, link, name}) => {
    return (
        <IconButton
          href={link}
          target="_blank"
          className="link"
          >    
            {image}
        </IconButton>
    )
}

export default LinkComponent;