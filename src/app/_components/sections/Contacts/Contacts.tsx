"use client"
import { useEffect, useState } from "react";

import styles from "./styles/Contacts.module.scss";
import configs from "../../../../configs/contacts";
import data from "../../../../data/data.json";
import SectionTitle from "../../globals/SectionTitle/SectionTitle";
import Link from "./components/Link/Link";
import StretchingLine from "./components/StretchingLine/StretchingLine";
import type { Link as ContactType } from "../../../../types/contacts";

const { links } = { ...data };
const { linesPlacements } = { ...configs }

const Contacts = () => {
    const [showLines, setShowLines] = useState<boolean>(false);

    useEffect(() => {
        if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
            setShowLines(true);
        }
        window.addEventListener("scroll", () => {
            const bottomPx = window.innerHeight + Math.round(window.scrollY);
            // Check if the user has reached the bottom of the page 
            if (bottomPx >= document.body.offsetHeight) {
                setShowLines(true);
            }
        })
    }, [setShowLines])

    return (
        <div className={styles.contacts_main}>
            <SectionTitle  title="Social Links"/>
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