import styles from "./styles/Link.module.scss";
import { icons } from "./utils/icons";
import type { Link } from "../../../../types/contacts";

const Link = ({ link, name }: Link) => (
    <div className={styles.link}>
        <a
            href={link}
            rel="noreferrer"
            target="_blank"
        />
        {icons.get(name)}
    </div>
)


export default Link;