"use client"
import { useEffect, useRef } from "react";

import styles from "./styles/Header.module.scss";
import configs from "../../../../configs/header";
import Menu from "./components/Menu/Menu";

const { headerStyleChangeScroll } = { ...configs };

const Header = () => {
    const headerRef = useRef<HTMLDivElement>(null);

    const clickLogo = () => window.scrollTo({ top: 0 });

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (headerRef.current) {
                if (window.scrollY > headerStyleChangeScroll) {
                    headerRef.current.classList.add(styles.header_scrolled);
                } else {
                    headerRef.current.classList.remove(styles.header_scrolled);
                }
            }
        });
        if (headerRef.current) {
            if (window.scrollY > headerStyleChangeScroll) {
                headerRef.current.classList.add(styles.header_scrolled);
            } else {
                headerRef.current.classList.remove(styles.header_scrolled);
            }
        }
    }, [])

    return (
        <div
            ref={headerRef}
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