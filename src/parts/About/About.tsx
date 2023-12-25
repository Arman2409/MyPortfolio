"use client"
import { useEffect, useRef, useState } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { ImSwitch } from "react-icons/im";
import { animate } from "framer-motion";

import styles from "./styles/About.module.scss";
import configs from "../../configs/about";

const { tvTurnOnTime } = { ...configs }

const About = () => {
    const [switchedOn, setSwitchedOn] = useState<boolean>(false);
    const [startTypewriter, setStartTypewriter] = useState<boolean>(false);
    const screenRef = useRef<any>(null);

    useEffect(() => {
        setTimeout(() => {
            setSwitchedOn(true);
            animate(screenRef.current, {
                width: "780px",
                height: "460px"
            }, {
                duration: 0.25,
                delay: 0.25
            })
            setTimeout(() => setStartTypewriter(true), 1000)
        }, tvTurnOnTime * 1000)
    }, [setSwitchedOn, setStartTypewriter])

    return (
        <div className={styles.about_cont}>
            <div
                className={styles.about_content}
            >
                <div
                    className={styles.screen}
                    ref={screenRef}
                ></div>
                {switchedOn && <ImSwitch
                    className={styles.switch_button}
                />
                }
                {startTypewriter && <div className={styles.typewriter_cont}>
                    <Typewriter
                        words={["Hello world,vfnjjn vdvkdndkvndkvkndvdvddv"]} />
                </div>}
            </div>
        </div>
    )
}

export default About;