import type { Point } from "../../../types/header";

export class Particle {
    distance: number = 0;
    x: number = 0;
    y: number = 0;
    particleSize: number = 0;
    angle: number = 0;
    angleChange: number = 0;
    dx: number = 0.01;
    dy: number = 0.01;
    centerX: number = 0;
    centerY: number = 0;
    private readonly ctx: any;
    constructor(ctx: any, particleSize: number, color: string, minSpeed: number) {
        this.ctx = ctx;
        this.particleSize = particleSize;
        this.centerX = ctx.canvas.width / 2;
        this.centerY = ctx.canvas.height / 2;
        const { x, y } = this.getNewPoint(ctx);
        this.x = x;
        this.y = y;
        this.angleChange = minSpeed + Math.random() * minSpeed;
        ctx.beginPath();
        ctx.rect(ctx.canvas.width / 2, ctx.canvas.height / 2, 10, 10);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    }

    private getNewPoint = (ctx: any): Point => {
        const { centerX, centerY, particleSize, calculateDistance, getNewPoint} = {...this};
        const newX = Math.round(Math.random() * centerX * 2);
        const newY = Math.round(Math.random() * centerY * 2);
        const distance = calculateDistance(newX, newY, centerX, centerY);
        if (distance > centerX - particleSize || distance < centerX / 2) {
            return getNewPoint(ctx);
        }
        return { x: newX, y: newY }
    }

    private calculateDistance = (
        x: number,
        y: number,
        destX: number,
        destY: number) => Math.sqrt((destX - x) ** 2 + (destY - y) ** 2);

    animate = () => {
        const { x, y, centerX, centerY, angle, angleChange, particleSize, ctx, calculateDistance } = { ...this }
        const newAngle = angle + angleChange;
        this.angle = newAngle;
        const distance = calculateDistance(x, y, centerX, centerY);
        const particleX = centerX + distance * Math.cos(newAngle);
        const particleY = centerY + distance * Math.sin(newAngle);
        ctx.beginPath();
        ctx.arc(particleX, particleY, particleSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}