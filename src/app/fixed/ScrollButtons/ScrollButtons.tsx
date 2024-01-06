"use client"
import { useCallback, useEffect, useState } from "react";

import styles from "./styles/ScrollButtons.module.scss";
import configs from "../../../configs/scrollButtons";

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
        window.addEventListener("scroll", () => {
            const scrolledY = window.scrollY;
            currentPoints.forEach((point: number, index: number) => {
                const nextPoint = currentPoints[index + 1];
                if (point < scrolledY && (!nextPoint || nextPoint > scrolledY)) {
                    setChosenPoint(point);
                }
            })
        })
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