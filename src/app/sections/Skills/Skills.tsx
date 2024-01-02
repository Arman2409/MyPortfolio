"use client"
import { useCallback, useEffect, useState } from "react";

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
let { skills } = { ...data };

const Skills = () => {
    const [locations, setLocations] = useState<any[]>([]);
    const [windowWidth, setWindowWidth] = useState<number>();
    const [screenSize, setScreenSize] = useState<string>("veryLarge");

    const changeLocations = useCallback((screen: string) => {
        setLocations(getDimesions([60, window.innerWidth - 60], [60, 540], screen === "medium" ||  screen === "small" ? skillSize / 2 : skillSize, screen === "verySmall" ? 4 : screen === "small" ? skills.length / 2 :  skills.length));
    }, [setLocations])

    useEffect(() => {
        const newScreenSize = getScreenSize(window.innerWidth, breakpoints);
        setScreenSize(newScreenSize);
        setWindowWidth(document.getElementById("skills_main")?.offsetWidth);
        changeLocations(newScreenSize);
    }, [screenSize, setLocations, setWindowWidth])

    useEffect(() => {
       window.addEventListener("resize", () => {
        setWindowWidth(document.getElementById("skills_main")?.offsetWidth);
        const newScreenSize = getScreenSize(window.innerWidth, breakpoints);
        changeLocations(newScreenSize);
        setScreenSize(newScreenSize)
       })
    }, [screenSize, setLocations, setWindowWidth])

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