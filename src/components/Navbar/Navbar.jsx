// Libraries
import {
    Link,
} from "react-router-dom";

// Assets
import Icon from "assets/icons";
import logo from "assets/logo.webp";

// CSS
import styles from "./layout.module.css";

// components
import NavbarLink from "./components/NavbarLink";

/**
 * Main navigation menu
 */
function Navbar() {
    return (
        <header className={styles.container}>
            <Link to="/"><img src={logo} title="Logo" alt="Page Logo" height="200px"/></Link>
            <nav>
                <ul className={styles.navLinksWrapper}>
                    <NavbarLink
                        title="Link to Homepage"
                        to="/"
                    >
                        <Icon.Home />
                    </NavbarLink>
                    <NavbarLink
                        title="Link to Projects"
                        to="/Projects"
                    >
                        <Icon.Projects />
                    </NavbarLink>
                    <NavbarLink
                        title="Link to About information"
                        to="/About"
                    >
                        <Icon.About />
                    </NavbarLink>
                    <NavbarLink
                        title="Link to contact methods"
                        to="/Contact"
                    >
                        <Icon.Email />
                    </NavbarLink>
                </ul>
            </nav>
        </header>
    );
};


export default Navbar;