import { useEffect, useRef, useState } from "react";

import styles from "./styles/Connections.module.scss";
import { drawLines } from "./utils/functions";
import configs from "../../../../../configs/skills";
import { getScreenSize } from "../../../../globals/functions/getScreenSize";

const { breakpoints } = { ...configs};

const Connections = ({ width, height, dimesions }: any) => {
    const [screenSize, setScreenSize] = useState<string>("veryLarge");
    const canvasRef = useRef<any>(null);    

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !width || !height) return;
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        drawLines(dimesions, ctx, screenSize);
        window.addEventListener("resize", () => setScreenSize(getScreenSize(window.innerWidth, breakpoints)));
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