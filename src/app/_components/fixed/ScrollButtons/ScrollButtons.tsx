"use client"
import { useCallback, useEffect, useState } from "react";

import styles from "./styles/ScrollButtons.module.scss";
import configs from "../../../../configs/scrollButtons";
import scrollListener from "./functions/scrollListener";

const { scrollPoints, switchToSmallWidth, hideBreakpoint } = { ...configs };

const ScrollButtons = () => {
    const [chosenPoint, setChosenPoint] = useState<number>(0);
    const [points, setPoints] = useState<number[]>([]);
    const [showButtons, setShowButtons] = useState<boolean>(true);

    const choose = useCallback((point: number) => {
        setChosenPoint(point);
        window.scrollTo({
            top: point
        });
    }, [setChosenPoint]);

    useEffect(() => {
        if (window.innerWidth <= hideBreakpoint) {
            setShowButtons(false);
        }

        const currentPoints = window.innerWidth > switchToSmallWidth ? scrollPoints.large : scrollPoints.small;
        setPoints(currentPoints);

        const handleScroll = () => scrollListener(currentPoints, setChosenPoint);
        const handleResize = () => {
            if (window.innerWidth <= hideBreakpoint) {
                setShowButtons(false);
            } else {
                setShowButtons(true);
            }
        };

        scrollListener(currentPoints, setChosenPoint);
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [setChosenPoint, setPoints])

    return (
        <div
            className={styles.scroll_buttons_main}
            style={{
                height: points.length * 40 + "px",
                display: showButtons ? "flex" : "none",
            }}>
                
            {points.map((point: number) => (
                <div
                    key={point}
                    className={styles[chosenPoint !== point ? "scroll_button" : "scroll_button_clicked"]}
                    onClick={() => choose(point)}>
                </div>
            ))}
        </div>
    )
}

export default ScrollButtons;