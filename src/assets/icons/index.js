// This file is here for simplifying how we use Icons in this project


import { ReactComponent as Home } from "./home-interface-icon-svgrepo-com.svg";
import { ReactComponent as Email } from "./email-interface-icon-svgrepo-com.svg";
import { ReactComponent as Projects } from "./files-interface-icon-svgrepo-com.svg";
import { ReactComponent as About } from "./chat-interface-icon-svgrepo-com.svg";
import { ReactComponent as MagnifyingGlass } from "./interface-icon-svgrepo-com.svg";


// Bundling all icons inside the Icon namespace
/**
 * A list of all Icons as React Components
 */
const Icon = {
    Home,
    Email,
    Projects,
    About,
    MagnifyingGlass,
};


export default Icon;