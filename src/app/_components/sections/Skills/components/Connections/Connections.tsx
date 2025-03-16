import { useEffect, useRef, useState } from "react";
import styles from "./styles/Connections.module.scss";
import { drawLines } from "./utils/functions";
import configs from "../../../../../../configs/skills";
import { debounce } from "../../../../../../helpers/debounce";
import { getScreenSize } from "../../../../../../helpers/getScreenSize";
import type { ConnectionsProps } from "../../../../../../types/skills";
import type { ScreenSize } from "../../../../../../types/global";

const { breakpoints, startConnectionsScrollPoints, switchToSmallWidth } = { ...configs };

const Connections = ({ width, height, dimensions }: ConnectionsProps) => {
    const [screenSize, setScreenSize] = useState<ScreenSize>("veryLarge");
    const [drawConnectionsStatus, setDrawConnectionsStatus] = useState<"wait" | "draw" | "finished">("wait");
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const abortDrawingRef = useRef(false); // Add abortDrawingRef

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || drawConnectionsStatus !== "draw") return;

        const width2 = document.getElementById("skills_main")?.offsetWidth as number;
        canvas.width = width2;
        canvas.height = 700;
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing
        abortDrawingRef.current = false; // Reset abort flag

        const currentScreenSize = getScreenSize(window.innerWidth, breakpoints);

        // Modify drawLines to check abortDrawingRef
        const drawLinesWithAbort = async () => {
            await drawLines(ctx, dimensions, currentScreenSize, abortDrawingRef);
        }

        drawLinesWithAbort();

    }, [drawConnectionsStatus, dimensions]);

    useEffect(() => {
        if (window.innerWidth < switchToSmallWidth) {
            if (Math.round(window.scrollY) >= startConnectionsScrollPoints.small) {
                setDrawConnectionsStatus("draw");
            }
        } else {
            if (Math.round(window.scrollY) >= startConnectionsScrollPoints.large) {
                setDrawConnectionsStatus("draw");
            }
        }
        const handleScroll = () => {
            if (window.innerWidth < switchToSmallWidth) {
                if (Math.round(window.scrollY) >= startConnectionsScrollPoints.small) {
                    setDrawConnectionsStatus("draw");
                }
            } else {
                if (Math.round(window.scrollY) >= startConnectionsScrollPoints.large) {
                    setDrawConnectionsStatus("draw");
                }
            }
        };

        const debouncedScroll = debounce(handleScroll, 100);
        window.addEventListener("scroll", debouncedScroll);

        const handleResize = () => {
            if (drawConnectionsStatus === "draw") {
                abortDrawingRef.current = true;
                setDrawConnectionsStatus("finished");
                setTimeout(() => {
                    setDrawConnectionsStatus("draw");
                    abortDrawingRef.current = false;
                }, 1000)
            }
            const newScreenSize = getScreenSize(window.innerWidth, breakpoints);
            setScreenSize(newScreenSize);

        };

        const debouncedResize = debounce(handleResize, 200);
        window.addEventListener("resize", debouncedResize);

        return () => {
            window.removeEventListener("scroll", debouncedScroll);
            window.removeEventListener("resize", debouncedResize);
        };
    }, []);

    return (
        <div className={styles.connections_main}>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default Connections;