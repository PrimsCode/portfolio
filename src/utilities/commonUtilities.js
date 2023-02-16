import Home from "../components/Home/Home";
import AboutMe from "../components/AboutMe/AboutMe";
import ProjectList from "../components/Projects/ProjectList";
import ContactForm from "../components/ContactMe/ContactForm";

export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home,
        id: "home"
    },
    {
        screen_name: "About Me",
        component: AboutMe,
        id: "about-me"
    },
    {
        screen_name: "Projects",
        component: ProjectList,
        id: "project-list"
    },
    {
        screen_name: "Contact Form",
        component: ContactForm,
        id: "contact-form"
    }
];

export const GET_SCREEN_INDEX = (screen_name) => {
    if (!screen_name) return -1;
    for (let i = 0; i < TOTAL_SCREENS.length; i++) {
        if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
    return -1;
};