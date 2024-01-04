const configs = {
    menuItemWidth: 250,
    menuItemHeight: 80,
    menuLineColor: "#0B666A",
    menuLineWidth: 7.5,
    menuDrawInterval: 500,
    // this is the same also for scrollButtons
    switchToSmallWidth: 500,
    // changes in menuItems assumes changes also for scrollPoints in scroll buttons config
    menuItems: [{
        order: 1,
        title: "About",
        scrollTo: {
            small: 0,
            large: 0
        },
    },
    {
        order: 2,
        title: "Skills",
        scrollTo: {
            small: 400,
            large: 600
        },
    },
    {
        order: 3,
        title: "Projects",
        scrollTo: {
            small: 1100,
            large: 1300
        },
    },
    {
        order: 4,
        title: "Language Skills",
        scrollTo: {
            small: 1750,
            large: 2100
        },
    },
    ]
}

export default configs;