import { FaCopyright } from "react-icons/fa";

import styles from "./styles/Footer.module.scss";
import configs from "../../../configs/footer";

const { email, copyrightText } = { ...configs};

const Footer = () => {
    return (
        <div className={styles.footer_main}>
            <div className={styles.copyright_cont}>
                Copyright <FaCopyright /> {copyrightText}
            </div>
        </div>
    )
}

export default Footer;