import colors from "../styles/colors.module.scss";

const configs = {
    skillSize: 80,
    linesColor: colors.purple,
    circlesColor: colors.blueLight,
    linesWidth: 7.5,
    breakpoints: {
        zero: 0,
        verySmall: 300,
        small: 600,
        medium: 900,
        large: 1280,
        veryLarge: 2000
    },
    switchToSmallWidth: 500,
    startConnectionsScrollPoints: {
        small: 200,
        large: 150,
    }
}

export default configs;