const configs = {
    menuItemWidth: 250,
    menuItemHeight: 80,
    menuLineColor: "#0B666A",
    menuLineWidth: 7.5,
    menuDrawInterval: 500,
    // Changes in menuItems assumes changes also for scrollPoints in scroll buttons config
    menuItems: [{
        order: 1,
        title: "About",
        scrollTo: 0,
    },
    {
        order: 2,
        title: "Skills",
        scrollTo: 600,
    },
    {
        order: 3,
        title: "Projects",
        scrollTo: 1300,
    },
    {
        order: 4,
        title: "Language Skills",
        scrollTo: 2100,
    },
    ]
}

export default configs;