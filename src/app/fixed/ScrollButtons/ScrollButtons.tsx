"use client"
import { useCallback, useEffect, useState } from "react";

import styles from "./styles/ScrollButtons.module.scss";
import configs from "../../../configs/scrollButtons";
import scrollListener from "./functions/scrollListener";

const { scrollPoints, switchToSmallWidth } = { ...configs }

const ScrollButtons = () => {
    const [chosenPoint, setChosenPoint] = useState<number>(0);
    const [points, setPoints] = useState<number[]>([]);

    const choose = useCallback((point: number) => {
        setChosenPoint(point)
        window.scrollTo({
            top: point
        });
    }, [setChosenPoint]);

    useEffect(() => {
        const currentPoints = window.innerWidth > switchToSmallWidth ? scrollPoints.large : scrollPoints.small;
        setPoints(currentPoints)
        window.addEventListener("scroll", () => scrollListener(currentPoints, setChosenPoint));

        // Delete the window listener 
        return window.removeEventListener("scroll", () => scrollListener(currentPoints, setChosenPoint));
    }, [setChosenPoint, setPoints])

    return (
        <div
            className={styles.scroll_buttons_main}
            style={{
                height: points.length * 40 + "px",
            }}>
            {points.map((point: number) => (
                <div
                    key={point}
                    className={chosenPoint !== point ? styles.scroll_button : styles.scroll_button_clicked}
                    onClick={() => choose(point)}>
                </div>
            ))}
        </div>
    )
}

export default ScrollButtons;