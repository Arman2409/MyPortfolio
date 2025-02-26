"use client"
import { useCallback, useEffect, useRef, useState } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { ImSwitch } from "react-icons/im";
import { motion } from "framer-motion";

import styles from "./styles/About.module.scss";
import data from "../../../../data/data.json";
import configs from "../../../../configs/about";
import { getScreenSize } from "../../../../helpers/getScreenSize";
import getTVVariants from "./utils/variants";
import type { ScreenSize } from "../../../../types/global";

const { about } = { ...data };
const { tvTurnOnTime, typewriterSpeed, breakpoints } = { ...configs }

const About = () => {
    const [switchedOn, setSwitchedOn] = useState<boolean | null>(null);
    const [screenSize, setScreenSize] = useState<ScreenSize>("veryLarge");
    const [startTypewriter, setStartTypewriter] = useState<boolean>(false);
    const screenRef = useRef<HTMLDivElement|null>(null);

    const handleClickButton = useCallback(() => {
        if (switchedOn) {
            setSwitchedOn(false);
            return setStartTypewriter(false);
        }
        turnOn();
    }, [setSwitchedOn, switchedOn])

    const turnOn = useCallback(() => {
        setSwitchedOn(true);
        setTimeout(() => setStartTypewriter(true), 1000)
    }, [setSwitchedOn, setStartTypewriter])

    useEffect(() => {
        setTimeout(() => turnOn(), tvTurnOnTime * 500);
    }, [setSwitchedOn, setStartTypewriter])

    useEffect(() => {
        // Change the screen size by the breakpoint 
        setScreenSize(getScreenSize(window.innerWidth, breakpoints))
        window.addEventListener("resize", () => {
            setScreenSize(getScreenSize(window.innerWidth, breakpoints))
        })
    }, [])


    return (
        <div className={styles.about_cont}>
            <div
                className={styles.about_content}
            >
                <motion.div
                    className={styles.screen}
                    ref={screenRef}
                    variants={switchedOn !== null ? getTVVariants(screenSize) : {}}
                    initial={switchedOn ? "switchedOff" : "switchedOn"}
                    animate={switchedOn ? "switchedOn" : "switchedOff"}
                />
                <ImSwitch
                    onClick={handleClickButton}
                    className={styles.switch_button}
                    style={switchedOn ? { color: "green" } : { color: "red" }}
                />
                {startTypewriter && switchedOn && <div className={styles.typewriter_cont}>
                    <Typewriter
                        words={[about]}
                        typeSpeed={typewriterSpeed} />
                </div>}
            </div>
        </div>
    )
}

export default About;