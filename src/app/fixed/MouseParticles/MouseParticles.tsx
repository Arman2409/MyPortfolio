"use client"
import { useEffect, useRef } from "react";

import styles from "./styles/MouseParticles.module.scss";
import { Particle } from "./utils/Particle";
import configs from "../../../configs/mouseParticles";

const { canvasSize, particlesColor, particlesMinSpeed, particlesQuantity, particleSize } = { ...configs };

const MouseParticles = () => {
    const particlesCanvas = useRef<any>();
    const particlesCont = useRef<any>();

    useEffect(() => {
        if (!particlesCanvas.current) return;
        const particles: Particle[] = [];
        const addParticles = () => {
            const particlesCount = Math.round(Math.random() * particlesQuantity);
            for (let i = 0; i < particlesCount; i++) {
                const particle = new Particle(context, particleSize, particlesColor, particlesMinSpeed);
                particles.push(particle);
            }
        }
        particlesCanvas.current.width = canvasSize;
        particlesCanvas.current.height = canvasSize;
        const context = particlesCanvas.current.getContext("2d");
        addParticles();
        const animateParticles = () => {
            context.clearRect(0, 0, canvasSize, canvasSize);
            particles.forEach(particle => particle.animate());
            requestAnimationFrame(animateParticles);
        };
        animateParticles();
        const halfCanvasSize = canvasSize / 2;
        particlesCont.current.style.top = -halfCanvasSize + "px";
        window.addEventListener("mousemove", ({ clientX, clientY }: MouseEvent) => {
            particlesCont.current.style.top = clientY - halfCanvasSize + "px";
            particlesCont.current.style.left = clientX - halfCanvasSize + "px";
        })
        window.addEventListener("click", () => addParticles());
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