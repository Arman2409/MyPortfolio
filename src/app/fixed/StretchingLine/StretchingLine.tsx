"use client"
import { useEffect, useRef } from "react";

import styles from "./styles/Stretching.module.scss";
import { DrawLine } from "./utils/drawLine";
import configs from "../../../configs/stretchingLine";
import type { StretchingLineProps } from "../../types/stretchingLIne";

const { edgeRadius, connectionWidth, connectionColor, edgeColor, lineWidth } = { ...configs }

const StretchingLine = ({ top, right, left }: StretchingLineProps) => {
    const stretchingCanvas = useRef<any>(null);

    useEffect(() => {
        if (!stretchingCanvas.current) return;
        stretchingCanvas.current.width = 100;
        stretchingCanvas.current.height = document.documentElement.scrollHeight;
        const context = stretchingCanvas.current.getContext("2d");
        new DrawLine(connectionWidth,
            edgeRadius,
            lineWidth,
            connectionColor,
            edgeColor,
            context).drawConnections();
    }, [])

    return (
        <div
            className={styles.stretching_main}
            style={{
                top: top + "px",
                right: right + "px",
                left: left + "px"
            }}
        >
            <canvas
                ref={stretchingCanvas}
            />
        </div>
    )
}

export default StretchingLine;