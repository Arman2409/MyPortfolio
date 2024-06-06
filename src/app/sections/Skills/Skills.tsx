"use client"
import { useCallback, useEffect, useState } from "react";

import styles from "./styles/Skills.module.scss";
import data from "../../../data/data.json";
import configs from "../../../configs/skills";
import { getDimesions } from "./utils/functions";
import Skill from "./components/Skill/Skill";
import Connections from "./components/Connections/Connections";
import SectionTitle from "../../globals/components/SectionTitle/SectionTitle";
import { getScreenSize } from "../../globals/functions/getScreenSize";
import type { Point } from "../../types/global";

const { breakpoints, skillSize } = {...configs};
let { skills } = { ...data };

const Skills = () => {
    const [locations, setLocations] = useState<Point[]>([]);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [screenSize, setScreenSize] = useState<string>("veryLarge");

    const changeLocations = useCallback((screen: string) => {
        const radius = screen === "medium" ||  screen === "small" ? skillSize / 2 : skillSize;
        const count = screen === "verySmall" ? 4 : screen === "small" ? skills.length / 2 : skills.length;
        setLocations(getDimesions([60, window.innerWidth - 60], [60, 540], radius, count));
    }, [setLocations])

    useEffect(() => {
        const newScreenSize = getScreenSize(window.innerWidth, breakpoints);
        setScreenSize(newScreenSize);
        setWindowWidth(document.getElementById("skills_main")?.offsetWidth as number);
        // Get new locations for the points by the screen size 
        changeLocations(newScreenSize);
    }, [screenSize, setLocations, setWindowWidth])

    useEffect(() => {
       window.addEventListener("resize", () => {
        setWindowWidth(document.getElementById("skills_main")?.offsetWidth as number);
        // Get new screen size by breakpoint 
        const newScreenSize = getScreenSize(window.innerWidth, breakpoints);
        // Get new locations for the points by the screen size 
        changeLocations(newScreenSize);
        setScreenSize(newScreenSize)
       })
    }, [screenSize, setLocations, setWindowWidth])

    return (
        <div
            id="skills_main"
            className={styles.skills}>
            <SectionTitle title={"Technical Skills"} />
            <div
                className={styles.skills_content}>
                {windowWidth && <Connections
                    width={windowWidth}
                    height={700}
                    dimesions={locations} />}
                {locations.map((dimesion: Point, index: number) => {
                    const { name, source } = { ...skills[index] };
                    return (
                        <Skill
                            key={name}
                            dimesion={dimesion}
                            src={source}
                        />)
                })}
            </div>
        </div>
    )
}

export default Skills;