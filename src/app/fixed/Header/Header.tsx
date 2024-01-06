"use client"
import { useCallback } from "react";

import styles from "./styles/Header.module.scss";
import Menu from "./components/Menu/Menu";

const Header = () => {
    const clickLogo = useCallback(() => window.scrollTo({top: 0}), [])

    return (
        <div
            className={styles.header}>
            <div
                className={styles.logo_cont}  >
                <img
                    src="/logo.png"
                    onClick={clickLogo} />
            </div>
            <Menu />
        </div>
    )
}

export default Header;