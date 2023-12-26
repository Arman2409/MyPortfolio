"use client"
import { useEffect, useState } from "react";

import data from "../../../data/data.json";
import styles from "./styles/Skills.module.scss";
import { getDimesions } from "./utils/functions";
import Skill from "./components/Skill/Skill";
import type { Dimesion } from "../../types/skills";
import Connections from "./components/Connections/Connections";

const { skills } = { ...data };

const Skills = () => {
    const [locations, setLocations] = useState<any[]>([]);
    const [windowWidth, setWindowWidth] = useState<number>()

    useEffect(() => {
        setWindowWidth(document.getElementById("skills_main")?.offsetWidth);
        setLocations(getDimesions([60, window.innerWidth - 60], [60, 540], 120, skills.length));
    }, [setLocations])

    return (
        <div
            id="skills_main"
            className={styles.skills}>
            <h2 className={styles.title}>
                My Skills
            </h2>
            <div
                className={styles.skills_content}>
                {windowWidth && <Connections
                    width={windowWidth}
                    height={700}
                    dimesions={locations} />}
                {locations.map((dimesion: Dimesion, index: number) => {
                    const { id, source } = { ...skills[index] };
                    return (
                        <Skill
                            key={id}
                            dimesion={dimesion}
                            src={source}
                        />)
                })}
            </div>
        </div>
    )
}

export default Skills;