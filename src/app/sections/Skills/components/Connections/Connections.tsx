import { useEffect, useRef, useState } from "react";

import styles from "./styles/Connections.module.scss";
import { drawLines } from "./utils/functions";
import configs from "../../../../../configs/skills";
import { getScreenSize } from "../../../../globals/functions/getScreenSize";
import type { ConnectionsProps } from "../../../../types/skills";

const { breakpoints } = { ...configs};

const Connections = ({ width, height, dimesions }: ConnectionsProps) => {
    const [screenSize, setScreenSize] = useState<string>("veryLarge");
    const canvasRef = useRef<HTMLCanvasElement>(null);    

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !width || !height) return;
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        drawLines(dimesions, ctx, screenSize);

        // Get new screen size by the breakpoint 
        const newScreenSize = getScreenSize(window.innerWidth, breakpoints);
        window.addEventListener("resize", () => setScreenSize(newScreenSize));
    }, [dimesions, width, height, screenSize, setScreenSize]);

    useEffect(() => {
        setScreenSize(getScreenSize(window.innerWidth, breakpoints))
    }, [setScreenSize])

    return (
        <div className={styles.connections_main}>
            <canvas ref={canvasRef} />
        </div>
    )
}

export default Connections;