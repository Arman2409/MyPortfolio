import { drawFromPointToPoint } from "../../../../../globals/functions/drawFromPointToPoint";
import type { Point } from "../../../../../types/header";

export const drawConnections = (
    elemHeight: number,
    windowWidth: number,
    windowHeight: number,
    menuLineWidth: number,
    drawIntervalAmount: number,
    menuLineColor: string,
    locations: any[],
    ctx: any):void => {
    if (!Array.isArray(locations)) {
        console.error("Locations not provided");
        return;
    }
    console.log(locations);
    const start = {
        x: 0,
        y: windowHeight / 2
    }
    const end = {
        x: windowWidth,
        y: windowHeight / 2
    }
    ctx.strokeStyle = menuLineColor;
    ctx.lineWidth = menuLineWidth;
    ctx.beginPath();
    let i = 0;
    const drawInterval = setInterval(() => {
        if (i === locations.length) {
            clearInterval(drawInterval);
            return;
        }
        const location = locations[i];
        let { x, y }: Point = { ...location };
        y = y - elemHeight / 2;
        setTimeout(() => {
            drawFromPointToPoint(start, { x, y }, ctx);
        }, drawIntervalAmount / 3)
        setTimeout(() => {
            drawFromPointToPoint(end, { x, y }, ctx);
        }, drawIntervalAmount / 3 * 2)
        i += 1;
    }, drawIntervalAmount)
}