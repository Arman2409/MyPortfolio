import type { Point } from "../types/global";

export const drawFromPointToPoint = (
    point1: Point, 
    point2: Point, 
    ctx: CanvasRenderingContext2D):void => {
    const { x, y } = { ...point1 };
    const { x: destX, y: destY } = { ...point2 };
    
    // Draw the line 
    ctx.moveTo(x, y);
    ctx.lineTo(destX, destY);
    ctx.stroke();
}