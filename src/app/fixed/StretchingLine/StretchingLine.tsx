"use client"
import { useEffect, useRef } from "react";

import styles from "./styles/Stretching.module.scss";
import { DrawLine } from "./utils/functions";

const StretchingLine = () => {
    const stretchingCanvas = useRef<any>(null);

    useEffect(() => {
       if(!stretchingCanvas.current) return;
       stretchingCanvas.current.width = 100;
       stretchingCanvas.current.height = document.documentElement.scrollHeight;
       const context = stretchingCanvas.current.getContext("2d");
       new DrawLine(context).drawConnection();
    }, [])
    
    return (
        <div className={styles.stretching_main}>
            <canvas
                ref={stretchingCanvas}
            />
        </div>
    )
}

export default StretchingLine;