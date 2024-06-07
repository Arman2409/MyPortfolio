import type { Point } from "../../../types/global";

const getRandomNumber = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
}

const getRandomBoolean = () => Math.random() < 0.5;

const chechkForCollides = (
    x: number,
    y: number,
    radius: number,
    arr: Point[],
    repeated = 1): Function | Point | void => {
    repeated++;
    if (repeated >= 100) {
        console.error("Can't get needed dimesions, returning current dimesions");
        return {
            x, y
        }
    }
    let hasCollides = false;
    arr.forEach((elem: { x: number, y: number }) => {
        // Check for collides for each coordinate 
        const hasCollidesInX = Math.abs(elem.x - x) < radius;
        const hasCollidesInY = Math.abs(elem.y - y) < radius
        if (hasCollidesInX && hasCollidesInY) {
            hasCollides = true;
        }
    });
    try {
        // If there was a collision 
        if (hasCollides) {
            // Add half of the radius for each dimesion to prevent collisions
            var random_boolean_x = getRandomBoolean();
            x = x + (random_boolean_x ? radius / 2 : -radius / 2);
            var random_boolean_y = getRandomBoolean();
            y = y + (random_boolean_y ? radius / 2 : -radius / 2);
            return chechkForCollides(x, y, radius, arr, repeated)
        } else
            // If there are no collides, return the x and y 
            return {
                x,
                y
            }
    }
    catch (e) {
        console.error("Error occured while trying to get the coordinates");
    }
}

const getRandomDims = (
    xLimitsMin: number,
    xLimitsMax: number,
    yLimitsMin: number,
    yLimitsMax: number,
    radius: number,
    dimsArr: Point[]): Function | Point => {
    // Get new random coordinates 
    const dimesionX = getRandomNumber(xLimitsMin, xLimitsMax);
    const dimesionY = getRandomNumber(yLimitsMin, yLimitsMax);
    const { x, y } = chechkForCollides(dimesionX, dimesionY, radius, dimsArr) as Point;
    if (x < xLimitsMin || x > xLimitsMax || y < yLimitsMin || y > yLimitsMax) {
        return getRandomDims(
            xLimitsMin,
            xLimitsMax,
            yLimitsMin,
            yLimitsMax,
            radius,
            dimsArr);
    }
    else {
        return ({ x, y });
    }
}

export const getDimesions = (
    xDimesion = [0, 1000],
    yDimesion = [0, 500],
    radius = 50,
    count = 20) => {
    const xLimitsMin = xDimesion[0]
    const xLimitsMax = xDimesion[1];
    const yLimitsMin = yDimesion[0];
    const yLimitsMax = yDimesion[1];
    const dimsArr = [];
    for (let i = 0; i < count; i++) {
        let { x, y } = getRandomDims(
            xLimitsMin,
            xLimitsMax,
            yLimitsMin,
            yLimitsMax,
            radius,
            dimsArr) as Point;
        dimsArr.push({ x, y });
    }
    return dimsArr;
}
