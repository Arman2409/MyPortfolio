import type { ScreenSize } from "../../../../../types/global";

const isSmallDimesion = (screen: ScreenSize) => screen === "medium" || screen === "small" || screen === "verySmall";

const getSkillStyle = (
    forStyle: "height" | "width" | "top" | "left",
    screenSize: ScreenSize,
    skillSize: number,
    current?: number
) => {
    if (forStyle === "height" || forStyle === "width") {
       return isSmallDimesion(screenSize) ? skillSize / 2 : skillSize + "px"
    }
    if(current) {
        return current - (isSmallDimesion(screenSize) ? skillSize / 4 : skillSize / 2) + "px"
    }
    console.error("Current pixels not provided")
}

export default getSkillStyle;