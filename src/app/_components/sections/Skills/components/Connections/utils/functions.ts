
import configs from "../../../../../../../configs/skills";
import type { Point, ScreenSize } from "../../../../../../../types/global";

const { linesColor, linesWidth, circlesColor } = { ...configs }

async function drawVerticalLinesRecursively(
    ctx: CanvasRenderingContext2D,
    dimensions: Point[],
    currentEnd: Point,
    abortRef: any,
    index: number = 0,
) {
    if (index < dimensions.length) {
        if (abortRef.current) return;

        const dimension = dimensions[index];
        const { x, y } = { ...currentEnd };
        const { x: destX, y: destY } = { ...dimension };

        ctx.moveTo(x, y);
        ctx.lineTo(x, destY);
        ctx.lineTo(destX, destY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();

        currentEnd = dimension;

        await new Promise<void>((resolve) => {
            setTimeout(() => {
                drawVerticalLinesRecursively(ctx, dimensions, currentEnd, abortRef, index += 1);
            }, 350)
            resolve()
        })
    }
}

export const drawLines = async (
    ctx: CanvasRenderingContext2D,
    dimesions: Point[],
    screenSize: ScreenSize,
    abortRef: any): Promise<void> => {

    if (!Array.isArray(dimesions) || !dimesions.length) {
        console.error("Dimesions not provided");
        return;
    };

    let currentEnd: Point = { x: 0, y: dimesions[0].y };
    ctx.strokeStyle = linesColor;
    ctx.lineWidth = screenSize === "small" || screenSize === "medium" ? linesWidth / 2 : linesWidth;
    ctx.beginPath();
    dimesions.push({ x: ctx.canvas.width, y: dimesions[dimesions.length - 1].y });

    // Draw the lines 
    await drawVerticalLinesRecursively(ctx, dimesions, currentEnd, abortRef);

    ctx.strokeStyle = linesColor;
    ctx.lineWidth = linesWidth;
    ctx.fillStyle = circlesColor;
}