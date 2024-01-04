"use client"
import { useCallback, useEffect, useState } from "react";

import styles from "./styles/ScrollButtons.module.scss";
import configs from "../../../configs/scrollButtons";

const { scrollPoints, switchToSmallWidth } = { ...configs }

const ScrollButtons = () => {
    const [chosenPoint, setChosenPoint] = useState<number>(0);
    const [points, setPoints] = useState<number[]>([]);

    const chose = useCallback((point: number) => {
        setChosenPoint(point)
        window.scrollTo({
            top: point
        });
    }, [setChosenPoint]);

    useEffect(() => {
        setPoints(window.innerWidth > switchToSmallWidth ? scrollPoints.large : scrollPoints.small)
        window.addEventListener("scroll", () => {
            const scrolledY = window.scrollY;
            points.forEach((point: number, index: number) => {
                const nextPoint = points[index + 1]
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
                    onClick={() => chose(point)}>
                </div>
            ))}
        </div>
    )
}

export default ScrollButtons;