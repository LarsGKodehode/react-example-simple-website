// Libraries
import {
    Outlet
} from "react-router-dom";

// CSS
import styles from "./layout.module.css";

// Components
import Navbar from "components/Navbar";
import Footer from "components/Footer";

/**
 * Page you land on
 */
function LandingPage() {
    return (
        <>
            <Navbar />
            <main className={styles.wrapper}>
                <Outlet />
            </main>

            <Footer />
        </>
    );
};


export default LandingPage;