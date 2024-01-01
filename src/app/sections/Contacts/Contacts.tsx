"use client"
import { useEffect, useState } from "react";

import styles from "./styles/Contacts.module.scss";
import data from "../../../data/data.json";
import Link from "./components/Link/Link";
import StretchingLine from "./components/StretchingLine/StretchingLine";
import configs from "../../../configs/contacts";
import type { Link as LinkType } from "../../types/contacts";

const { links } = { ...data };
const { linesPlacements } = {...configs}

const Contacts = () => {
    const [showLines, setShowLines] = useState<boolean>(false)

    useEffect(() => {
        if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
            setShowLines(true);
        }
        window.addEventListener("scroll", () => {
            if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
                setShowLines(true);
            }
        })
    }, [setShowLines])

    return (
        <div className={styles.contacts_main}>
            {showLines && linesPlacements.map((placement:number) => (
                 <StretchingLine key={placement} right={placement} />
            ))}

            {links.map((link: LinkType) => (
                <Link
                    link={link.link}
                    name={link.name}
                    key={link.id}
                />
            ))}
        </div>
    )
}

export default Contacts;