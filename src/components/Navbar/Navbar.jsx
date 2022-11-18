// Libraries
import {
    NavLink,
    Link,
} from "react-router-dom";

// Assets
import Icon from "assets/icons";
import logo from "assets/logo.png";

// CSS
import styles from "./layout.module.css";


function Navbar() {
    return (
        <header className={styles.container}>
            <Link to="/"><img src={logo} title="Logo" alt="Page Logo" height="200px"/></Link>
            <nav>
                <ul className={styles.navLinksWrapper}>
                    <li><NavLink
                        title="Link to Homepage"
                        className={({isActive}) => isActive ? styles.linkActive : ""}
                        to="/"
                    >
                        <Icon.Home />
                    </NavLink></li>
                    <li><NavLink
                        title="Link to Projects"
                        className={({isActive}) => isActive ? styles.linkActive : ""}
                        to="/Projects"
                    >
                        <Icon.Projects />
                    </NavLink></li>
                    <li><NavLink
                        title="Link to About information"
                        className={({isActive}) => isActive ? styles.linkActive : ""}
                        to="/About"
                    >
                        <Icon.About />
                    </NavLink></li>
                    <li><NavLink
                        title="Link to contact methods"
                        className={({isActive}) => isActive ? styles.linkActive : ""}
                        to="/Contact"
                    >
                        <Icon.Email />
                    </NavLink></li>
                </ul>
            </nav>
        </header>
    );
};


export default Navbar;