"use client"
import styles from "./styles/Contacts.module.scss";
import data from "../../../data/data.json";
import Link from "./components/Link/Link";
import StretchingLine from "./components/StretchingLine/StretchingLine";
import type { Link as LinkType } from "../../types/contacts";

const { links } = { ...data };

const Contacts = () => {
    return (
        <div className={styles.contacts_main}>
            <StretchingLine right={71}/>
            <StretchingLine right={40}/>
            <StretchingLine right={56}/>

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