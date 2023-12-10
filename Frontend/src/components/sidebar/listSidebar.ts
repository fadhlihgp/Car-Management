import home from "../../resources/fi_home.png";
import truck from "../../resources/fi_truck.png";

export const listSidebar = [
    {
        icon: home,
        text: 'Dashboard',
        contents: [
            {
                name: 'Dashboard',
                link: '/dashboard'
            }
        ]
    },
    {
        icon: truck,
        text: 'Cars',
        contents: [
            {
                name: 'List Car',
                link: '/cars'
            }
        ]
    },
]
