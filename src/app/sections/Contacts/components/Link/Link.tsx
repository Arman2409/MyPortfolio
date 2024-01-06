import { useCallback } from "react";

import styles from "./styles/Link.module.scss";
import { icons } from "./utils/icons";
import { takeToLink } from "../../../../globals/functions/takeToLink";
import type { Link } from "../../../../types/contacts";

const Link = ({ link, name }: Link) => {
    const goTo = useCallback(takeToLink, [])

    return (
        <div
            className={styles.link}
            onClick={() => goTo(link)}>
            {icons[name as keyof typeof icons]}
        </div>
    )
}


export default Link;