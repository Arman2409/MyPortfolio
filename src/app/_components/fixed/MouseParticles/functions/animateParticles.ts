import type { Particle } from "../utils/Particle";

const animateParticles = (
    context: CanvasRenderingContext2D,
    particles: Particle[],
    canvasSize: number,
    shouldStop?: () => boolean
): number => {
    if (shouldStop?.()) return 0;

    context.clearRect(0, 0, canvasSize, canvasSize);
    particles.forEach(particle => particle.animate());
    return requestAnimationFrame(() => animateParticles(context, particles, canvasSize, shouldStop));
}

export default animateParticles;