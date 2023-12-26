import { useEffect, useRef } from "react";

import styles from "./styles/Connections.module.scss";
import { drawLines } from "./utils/functions";

const Connections = ({ width, height, dimesions }: any) => {
    const canvasRef = useRef<any>(null);    

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !width || !height) return;
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        drawLines(dimesions, ctx);
    }, [])

    return (
        <div className={styles.connections_main}>
            <canvas ref={canvasRef} />
        </div>
    )
}

export default Connections;