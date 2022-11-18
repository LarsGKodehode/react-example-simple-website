// CSS
import styles from "./layout.module.css";

function Footer() {
    return (
        <footer className={styles.container}>
            <ul>
                <li>Mail: example@nowhere.com</li>
                <li><a target="__blank" href="https://www.github.com/LarsGKodehode">GitHub</a></li>
            </ul>
        </footer>
    );
};


export default Footer;