import { Point } from "@/app/types/header";

export class Particle {
    distance: number = 0;
    x: number = 0;
    y: number = 0;
    angle: number = 0;
    radius: number = 100;
    dx: number = 0.01;
    dy: number = 0.01;
    centerX: number = 0;
    centerY: number = 0;
    private readonly ctx: any;
    constructor(ctx: any) {
        this.ctx = ctx;
        const { x, y } = this.getNewPoint(ctx);
        this.x = x;
        this.y = y;
        this.centerX = ctx.canvas.width / 2;
        this.centerY = ctx.canvas.height / 2;
        this.radius = ctx.canvas.width / 2;
        ctx.beginPath();
        ctx.rect(ctx.canvas.width / 2, ctx.canvas.height / 2, 10, 10);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();
    }

    private getNewPoint = (ctx: any): Point => {
        const maxRadius = ctx.canvas.width / 2;
        const newX = Math.round(Math.random() * ctx.canvas.width) ;
        const newY = Math.round(Math.random() * ctx.canvas.height);
        const distance = this.calculateDistance(newX, newY, ctx.canvas.width / 2, ctx.canvas.height / 2);
        if (distance > maxRadius) {
            this.getNewPoint(ctx);
        }
        return { x: newX, y: newY }
    }

    private calculateDistance = (
        x: number,
        y: number,
        destX: number,
        destY: number) => Math.sqrt((destX - x) ** 2 + (destY - y) ** 2);

    animate = () => {
        const { x, y, centerX, centerY } = { ...this }
        this.angle += 0.01;
        const distance = this.calculateDistance(x, y, centerX, centerY);
        const particleX = centerX + distance * Math.cos(this.angle);
        const particleY = centerY + distance * Math.sin(this.angle);
        this.ctx.beginPath();
        this.ctx.rect(particleX, particleY, 10, 10);
        this.ctx.fillStyle = "red";
        this.ctx.fill();
        this.ctx.stroke();
    }
}