"use client"
import { useEffect, useState } from "react";

import styles from "./styles/Contacts.module.scss";
import configs from "../../../../configs/contacts";
import data from "../../../../data/data.json";
import { isOnBottom } from "../../../../helpers/sizes";
import SectionTitle from "../../globals/SectionTitle/SectionTitle";
import Link from "./components/Link/Link";
import StretchingLine from "./components/StretchingLine/StretchingLine";
import type { Link as ContactType } from "../../../../types/contacts";

const { links } = { ...data };
const { linesPlacements, hideBreakpoint } = { ...configs }

const Contacts = () => {
    const [showLines, setShowLines] = useState<boolean>(false);

    useEffect(() => {
        const isMobile = window.innerWidth < hideBreakpoint;
        const handleScroll = () => {
            // Check if the user has reached the bottom of the page 
            if (isOnBottom() && !isMobile) {
                setShowLines(true);
            }
        };

        handleScroll();
        
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll);
    }, [setShowLines])

    return (
        <div className={styles.contacts_main}>
            <SectionTitle title="Social Links" />
            <div className={styles.contacts_content}>
                {showLines && linesPlacements.map((placement: number) => (
                    <StretchingLine key={placement} right={placement} />
                ))}
                {links.map(({ link, name }: ContactType) => (
                    <Link
                        link={link}
                        name={name}
                        key={name}
                    />
                ))}
            </div>
        </div>
    )
}

export default Contacts;