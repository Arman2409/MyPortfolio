import { drawFromPointToPoint } from "../../../../../../../helpers/drawFromPointToPoint";
import type { Point } from "../../../../../../../types/global";

const drawConnections = (
    ctx: CanvasRenderingContext2D,
    elemHeight: number,
    windowWidth: number,
    windowHeight: number,
    menuLineWidth: number,
    drawIntervalAmount: number,
    menuLineColor: string,
    locations: Point[]
) => {
    if (!Array.isArray(locations)) {
        console.error("Locations not provided");
        return;
    }

    const halfWindowHeight = windowHeight / 2;

    const start = {
        x: 0,
        y: halfWindowHeight,
    }
    const end = {
        x: windowWidth,
        y: halfWindowHeight,
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
            setTimeout(() => {
                drawFromPointToPoint(end, { x, y }, ctx);
            }, drawIntervalAmount / 3);
        }, drawIntervalAmount / 3);

        i += 1;
    }, drawIntervalAmount)
}

export default drawConnections;