"use client"
import { useCallback, useEffect, useState } from "react";

import styles from "./styles/ScrollButtons.module.scss";
import configs from "../../../configs/scrollButtons";

const { scrollPoints } = { ...configs }

const ScrollButtons = () => {
    const [chosenPoint, setChosenPoint] = useState<number>(0);

    const chose = useCallback((point: number) => {
        setChosenPoint(point)
        window.scrollTo({
            top: point
        });
    }, [setChosenPoint]);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const scrolledY = window.scrollY;
            scrollPoints.forEach((point: number, index: number) => {
                const nextPoint = scrollPoints[index + 1]
                if (point < scrolledY && (!nextPoint || nextPoint > scrolledY)) {
                    setChosenPoint(point);
                }
            })
        })
    }, [setChosenPoint])

    return (
        <div 
          className={styles.scroll_buttons_main}
          style={{
            height: scrollPoints.length * 40 + "px",
          }}>
            {scrollPoints.map((point: number) => (
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