import { drawFromPointToPoint } from "../../../globals/functions/drawFromPointToPoint";
import type { Point } from "../../../types/header";

export class DrawLine {
    height: number = 100;
    width: number = 100;
    connectionWidth: number = 100;
    edgeRadius: number = 5;
    private direction: "bottom" | "right" | "left" = "bottom";
    private animation: number = 0;
    private circleColor: string = "green";
    private current: Point = { x: 10, y: 10 }
    private destination: Point = { x: 10, y: 50 }
    private readonly ctx;

    constructor(
        connectionWidth: number,
        edgeRadius: number,
        lineWidth: number,
        connectionColor: string,
        edgeColor: string,
        ctx: any) {
        this.connectionWidth = connectionWidth;
        this.edgeRadius = edgeRadius;
        this.circleColor = edgeColor;
        ctx.strokeStyle = connectionColor;
        ctx.lineWidth = lineWidth || 5;
        ctx.beginPath();
        this.ctx = ctx;
    }

    drawConnections = () => {
        let { direction, ctx, circleColor, current, destination, edgeRadius, connectionWidth } = { ...this };
        if (direction === "bottom") this.direction = destination.x > edgeRadius * 2 ? "left" : "right";
        if (direction === "right") this.direction = "bottom";
        if (direction === "left") this.direction = "bottom";
        const { direction: currDirection } = { ...this };
        this.current = destination;
        this.destination = {
            x: currDirection == "bottom" ? destination.x : currDirection === "left" ? edgeRadius * 2 :
                connectionWidth - edgeRadius,
            y: currDirection == "bottom" ? destination.y + connectionWidth : destination.y,
        }
        ctx.beginPath();
        ctx.arc(current.x, current.y, edgeRadius, 0, 2 * Math.PI);
        ctx.fillStyle = circleColor;
        ctx.fill();
        ctx.stroke();
        if (destination.y > ctx.canvas.height) {
            drawFromPointToPoint(current, {
                x: destination.x,
                y: ctx.canvas.height + connectionWidth
            }, ctx);
            cancelAnimationFrame(this.animation);
            return;
        };
        drawFromPointToPoint(current, destination, ctx);
        this.animation = requestAnimationFrame(this.drawConnections);
    }
}