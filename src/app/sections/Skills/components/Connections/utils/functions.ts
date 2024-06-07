
import configs from "../../../../../../configs/skills";
import type { Point, ScreenSize } from "../../../../../types/global";

const { linesColor, linesWidth, circlesColor } = { ...configs }

export const drawLines = (
    ctx: CanvasRenderingContext2D, 
    dimesions: Point[], 
    screenSize: ScreenSize):void => {
    if (!Array.isArray(dimesions) || !dimesions.length) {
        console.error("Dimesions not provided");
        return;
    }
    let currentEnd: Point = { x: 0, y: dimesions[0].y };
    ctx.strokeStyle = linesColor;
    ctx.lineWidth = screenSize === "small" || screenSize === "medium" ? linesWidth / 2 : linesWidth;
    ctx.beginPath();
    dimesions.push({x: ctx.canvas.width, y:dimesions[dimesions.length - 1].y})
    // Draw the lines 
    dimesions.forEach((dimesion: Point) => {
        const { x, y } = { ...currentEnd };
        const { x: destX, y: destY } = { ...dimesion };
        ctx.moveTo(x, y);
        ctx.lineTo(x, destY);
        ctx.lineTo(destX, destY);
        ctx.stroke();
        // Change the end of the line for the next line
        currentEnd = dimesion;
    })
    ctx.fillStyle = circlesColor;
    // Draw the circles 
    dimesions.forEach(({x, y}: Point) => {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
    })
}