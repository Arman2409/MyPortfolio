"use client"
import { useEffect, useRef } from "react";

import { Particle } from "./utils.ts/Particle";

const MouseParticles = () => {
    const particlesCanvas = useRef<any>();

    useEffect(() => {
        if (!particlesCanvas.current) return;
        particlesCanvas.current.width = 500;
        particlesCanvas.current.height = 500;
        const particles:Particle[] = [];
        const context = particlesCanvas.current.getContext("2d");
        const particle = new Particle(context);
        particles.push(particle);
        const animateParticles = () => {
            context.clearRect(0, 0, 500, 500);
            particles.forEach(particle => particle.animate());
            requestAnimationFrame(animateParticles);
        };
        animateParticles();
    }, [])

    return (
        <div>
            <canvas ref={particlesCanvas} />
        </div>
    )
}

export default MouseParticles;