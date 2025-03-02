const configs = {
    menuItemWidth: 250,
    menuItemHeight: 80,
    menuLineColor: "#0B666A",
    menuLineWidth: 7.5,
    menuDrawInterval: 330,
    headerStyleChangeScroll: 50,
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
        title: "Technical Skills",
        scrollTo: {
            small: 400,
            large: 650
        },
    },
    {
        order: 3,
        title: "Projects",
        scrollTo: {
            small: 1100,
            large: 1400
        },
    },
    {
        order: 4,
        title: "Languages",
        scrollTo: {
            small: 1750,
            large: 2100
        },
    },
    {
        order: 5,
        title: "Social Links",
        scrollTo: {
            small: 3000,
            large: 3000
        },
    },
    ]
}

export default configs;