// This file is here for simplifying how we use logos in this project


import { ReactComponent as GitHub } from "./github-svgrepo-com.svg";
import { ReactComponent as LinkedIn } from "./linkedin-svgrepo-com.svg";
import { ReactComponent as Twitter } from "./twitter-svgrepo-com.svg";

// Bundling all logos inside the Logo namespace
/**
 * A list of all Icons as React Components
 */
const Logo = {
    GitHub,
    Linkedin: LinkedIn,
    Twitter,
};


export default Logo;