import { drawFromPointToPoint } from "../../../globals/functions/drawFromPointToPoint";
import type { Point } from "../../../types/header";

export class DrawLine {
    height: number = 100;
    width: number = 100;
    direction = "bottom";
    animation: number = 0;
    current: Point = { x: 10, y: 10 }
    destination: Point = {
        x: 10,
        y: 90,
    }
    private readonly ctx;

    constructor(ctx: any) {
        this.ctx = ctx;
        ctx.strokeStyle = "red";
        ctx.lineWidth = 5;
        ctx.beginPath();
    }

    drawConnection = () => {
        console.log("animating");
        
        let {direction, ctx, current, destination} = {...this};
        if (direction === "bottom") this.direction = destination.x > 10 ? "left" : "right";
        if (direction === "right") this.direction = "bottom";
        if (direction === "left") this.direction = "bottom";
        this.current = destination;
        const { direction: currDirection, current: currCoords } = {...this};
        this.destination = {
            x: currDirection == "bottom" ? currCoords.x : currDirection === "left" ? 10 : 90,
            y: currDirection == "bottom" ? currCoords.y + 90 : currCoords.y,
        }
        ctx.beginPath();
        ctx.arc(current.x, current.y, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.stroke();
        if (destination.y > ctx.canvas.height) {
            drawFromPointToPoint(current, {
                x: currCoords.x,
                y: ctx.canvas.height + 50
            }, ctx);
            cancelAnimationFrame(this.animation);
            return
        };
        drawFromPointToPoint(current, destination, ctx);
        this.animation = requestAnimationFrame(this.drawConnection);
    }
}