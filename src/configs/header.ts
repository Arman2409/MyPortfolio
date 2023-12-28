const configs = {
    menuItemWidth: 250,
    menuItemHeight: 80,
    menuLineColor: "#0B666A",
    menuLineWidth: 7.5,
    menuDrawInterval: 500,
    // Changes in menuItems assumes changes also for scrollPoints in scroll buttons config
    menuItems: [{
        order: 1,
        title: "About Me",
        scrollTo: 0,
    },
    {
        order: 2,
        title: "My skills",
        scrollTo: 600,
    },
    {
        order: 3,
        title: "My Projects",
        scrollTo: 1300,
    },
    ]
}

export default configs;