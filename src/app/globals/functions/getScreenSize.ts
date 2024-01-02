export const getScreenSize = (windowWidth:number, breakpoints:Object) => {
    const keys = Object.keys(breakpoints);
    let lastBreakpoint = 0;
    let chosenPoint:string = "";
    keys.forEach((breakpoint:string) => {
        if(chosenPoint) return;
        const currentBreakpoint = Number(breakpoints[breakpoint as keyof typeof breakpoints])
        if(currentBreakpoint > windowWidth && lastBreakpoint < windowWidth){
             chosenPoint = breakpoint;
             return;
        }
        lastBreakpoint = currentBreakpoint;
    })
    return chosenPoint;
}