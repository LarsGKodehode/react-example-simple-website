// Libraries
import {
    NavLink
} from "react-router-dom";

// CSS
import styles from "./layout.module.css";


function Navbar() {
    return (
        <header className={styles.container}>
            <img src="provide" alt="Logo" />
            <nav>
                <ul className={styles.navLinksWrapper}>
                    <li><NavLink className={({isActive}) => isActive && styles.linkActive} to="/">Home</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive && styles.linkActive} to="/Projects">Project</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive && styles.linkActive} to="/About">About</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive && styles.linkActive} to="/Contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};


export default Navbar;