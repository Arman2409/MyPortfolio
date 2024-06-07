import type { ScreenSize } from "../../types/global";

export const getScreenSize = (
    windowWidth: number, 
    breakpoints: Object):ScreenSize => {
    const keys = Object.keys(breakpoints) as ScreenSize[];
    let lastBreakpoint = 0;
    let chosenPoint:ScreenSize | "" = "";
    // Check for all breakpoints 
    keys.forEach((breakpoint: ScreenSize) => {
        if (chosenPoint) return;
        const currentBreakpoint = Number(breakpoints[breakpoint as keyof typeof breakpoints])
        if (currentBreakpoint > windowWidth && lastBreakpoint < windowWidth) {
            return chosenPoint = breakpoint;
        }
        // Change the last breakpoint for the next iteration  
        lastBreakpoint = currentBreakpoint;
    })
    return chosenPoint as ScreenSize;
}