import type { Particle } from "../utils/Particle";

const animateParticles = (
    context: CanvasRenderingContext2D,
    particles: Particle[],
    canvasSize: number
):void => {
    context.clearRect(0, 0, canvasSize, canvasSize);
    particles.forEach(particle => particle.animate());
    requestAnimationFrame(() => animateParticles(context, particles, canvasSize));
}

export default animateParticles;