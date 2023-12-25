"use client"
import { useState } from "react";

import data from "../../../data/data.json";
import styles from "./styles/Skills.module.scss";
import { getDimesions } from "./utils/functions";
import Skill from "./components/Skill/Skill";
import type { Dimesion } from "../../types/skills";

const { skills } = { ...data };

const Skills = () => {
    const [locations, setLocations] = useState<any[]>([]);
    // !! maximum width should be limited
    const dimesions = getDimesions([0, innerWidth], [0, 600], 50, skills.length);

    return (
        <div className={styles.skills}>
            <div className={styles.skills_content}>
                {dimesions.map((dimesion: Dimesion, index: number) => {
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