"use client"
import { useEffect, useState } from "react";

import data from "../../../data/data.json";
import styles from "./styles/Skills.module.scss";
import { getDimesions } from "./utils/functions";
import Skill from "./components/Skill/Skill";
import Connections from "./components/Connections/Connections";
import SectionTitle from "../../globals/components/SectionTitle/SectionTitle";
import { getScreenSize } from "../../globals/functions/getScreenSize";
import configs from "../../../configs/skills";
import type { Dimesion } from "../../types/skills";


const { breakpoints, skillSize } = {...configs};
const { skills } = { ...data };

const Skills = () => {
    const [locations, setLocations] = useState<any[]>([]);
    const [windowWidth, setWindowWidth] = useState<number>();
    const [screenSize, setScreenSize] = useState<string>(getScreenSize(window.innerWidth, breakpoints));

    useEffect(() => {
        setWindowWidth(document.getElementById("skills_main")?.offsetWidth);
        setLocations(getDimesions([60, window.innerWidth - 60], [60, 540], screenSize === "medium" || screenSize === "small" ? skillSize / 2 : skillSize, skills.length));
    }, [setLocations, setWindowWidth])

    useEffect(() => {
       window.addEventListener("resize", () => {
        setWindowWidth(document.getElementById("skills_main")?.offsetWidth);
        setLocations(getDimesions([60, window.innerWidth - 60], [60, 540], screenSize === "medium" || screenSize === "small" ? skillSize / 2 : skillSize, skills.length))
       })
    }, [setLocations, setWindowWidth])

    return (
        <div
            id="skills_main"
            className={styles.skills}>
            <SectionTitle title={"Skills"} />
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