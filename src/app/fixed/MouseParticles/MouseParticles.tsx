"use client"
import { useEffect, useRef } from "react";

import styles from "./styles/MouseParticles.module.scss";
import configs from "../../../configs/mouseParticles";
import addParticles from "./functions/addParticles";
import animateParticles from "./functions/animateParticles";
import type { Particle } from "./utils/Particle";

const { canvasSize } = { ...configs };

const MouseParticles = () => {
    const particlesCanvas = useRef<HTMLCanvasElement | null>(null);
    const particlesCont = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!particlesCanvas.current) return;
        const particles: Particle[] = [];
        particlesCanvas.current.width = canvasSize;
        particlesCanvas.current.height = canvasSize;
        const context = particlesCanvas.current.getContext("2d") as CanvasRenderingContext2D;

        addParticles(context, particles);
        animateParticles(context, particles, canvasSize);

        const halfCanvasSize = canvasSize / 2;
        if (particlesCont.current) {
            particlesCont.current.style.top = -halfCanvasSize + "px";
            window.addEventListener("mousemove", ({ clientX, clientY }: MouseEvent) => {
                if (particlesCont.current) {
                    particlesCont.current.style.top = clientY - halfCanvasSize + "px";
                    particlesCont.current.style.left = clientX - halfCanvasSize + "px";
                }
            })
        }
        window.addEventListener("click", () => addParticles(context, particles));
    }, [])

    return (
        <div
            ref={particlesCont}
            className={styles.mouse_partilces_main}>
            <canvas ref={particlesCanvas} />
        </div>
    )
}

export default MouseParticles;
