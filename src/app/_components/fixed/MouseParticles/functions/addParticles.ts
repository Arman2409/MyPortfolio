import configs from "../../../../../configs/mouseParticles";
import { Particle } from "../utils/Particle";

const {
    particlesColor,
    particlesMinSpeed,
    particlesQuantity,
    particleSize } = { ...configs };

const addParticles = (
    context: CanvasRenderingContext2D,
    particles: Particle[]
) => {
    // Get random quantity for the particles 
    const particlesCount = Math.round(Math.random() * particlesQuantity);

    for (let i = 0; i < particlesCount; i++) {
        const particle = new Particle(context, particleSize, particlesColor, particlesMinSpeed);
        particles.push(particle);
    }
}

export default addParticles;