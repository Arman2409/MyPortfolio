"use client"
import { useEffect, useRef, useState } from "react";

import styles from "./styles/MouseParticles.module.scss";
import configs from "../../../../configs/mouseParticles";
import addParticles from "./functions/addParticles";
import animateParticles from "./functions/animateParticles";
import type { Particle } from "./utils/Particle";

const { canvasSize, hideBreakpoint } = { ...configs };

const MouseParticles = () => {
    const particlesCanvas = useRef<HTMLCanvasElement | null>(null);
    const particlesCont = useRef<HTMLDivElement | null>(null);
    const [showParticles, setShowParticles] = useState<boolean>(true);

    useEffect(() => {
        if (!particlesCanvas.current) return;
        if (window.innerWidth <= hideBreakpoint) return;

        const particles: Particle[] = [];
        particlesCanvas.current.width = canvasSize;
        particlesCanvas.current.height = canvasSize;
        const context = particlesCanvas.current.getContext("2d") as CanvasRenderingContext2D;

        addParticles(context, particles);
        let shouldStopAnimation = false;
        const animationFrame = animateParticles(
            context,
            particles,
            canvasSize,
            () => shouldStopAnimation
        );

        const halfCanvasSize = canvasSize / 2;
        const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
            if (particlesCont.current) {
                particlesCont.current.style.top = clientY - halfCanvasSize + "px";
                particlesCont.current.style.left = clientX - halfCanvasSize + "px";
            }
        };
        const handleClick = () => addParticles(context, particles);
        const handleResize = () => {
            if (window.innerWidth <= hideBreakpoint) {
                setShowParticles(false);
            } else {
                setShowParticles(true);
            }
        };

        if (particlesCont.current) {
            particlesCont.current.style.top = -halfCanvasSize + "px";

            window.addEventListener("mousemove", handleMouseMove)
        }
        window.addEventListener("click", handleClick);
        
        window.addEventListener("resize", handleResize)

        return () => {
            shouldStopAnimation = true;
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleClick);
            window.removeEventListener("resize", handleResize);
        };
    }, [setShowParticles])

    return (
        <div
            ref={particlesCont}
            className={styles.mouse_partilces_main}>
            {showParticles && <canvas ref={particlesCanvas} />}
        </div>
    )
}

export default MouseParticles;
