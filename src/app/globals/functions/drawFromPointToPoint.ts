import type { Point } from "../../types/header";

export const drawFromPointToPoint = (
    point1: Point, 
    point2: Point, 
    ctx: any):void => {
    const { x, y } = { ...point1 };
    const { x: destX, y: destY } = { ...point2 };
    ctx.moveTo(x, y);
    ctx.lineTo(destX, destY);
    ctx.stroke();
}