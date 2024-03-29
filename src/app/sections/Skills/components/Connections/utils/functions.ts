
import configs from "../../../../../../configs/skills";
import type { Dimesion } from "../../../../../types/skills";

const { linesColor, linesWidth } = { ...configs }

export const drawLines = (dimesions: Dimesion[], ctx: any, screenSize: string):void => {
    if (!Array.isArray(dimesions)) {
        console.error("Dimesions not provided");
        return;
    }
    let currentEnd: Dimesion = { x: 0, y: dimesions[0].y };
    ctx.strokeStyle = linesColor;
    ctx.lineWidth = screenSize === "small" || screenSize === "medium" ? linesWidth / 2 : linesWidth;
    ctx.beginPath();
    dimesions.push({x: ctx.canvas.width, y:dimesions[dimesions.length - 1].y})
    dimesions.forEach((dimesion: Dimesion) => {
        const { x, y } = { ...currentEnd };
        const { x: destX, y: destY } = { ...dimesion };
        ctx.moveTo(x, y);
        ctx.lineTo(x, destY);
        ctx.lineTo(destX, destY);
        ctx.stroke();
        currentEnd = dimesion;
    })
}