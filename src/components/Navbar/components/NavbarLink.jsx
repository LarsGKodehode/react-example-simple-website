// Libraries
import {
    NavLink,
} from "react-router-dom"

// CSS
import styles from "../layout.module.css";


/**
 * NavbarLink component
 */
function NavbarLink(props) {
    const { title, to, children } = props
    return (
        <li className={styles.listElement}>
            <NavLink
                title={title}
                className={({isActive}) => [isActive ? styles.linkActive : "", styles.link].join(" ")}
                to={to}
            >
                {children}
            </NavLink>
        </li>
    )
};

export default NavbarLink;