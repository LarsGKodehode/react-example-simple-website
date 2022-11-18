// Libraries
import {
    Outlet
} from "react-router-dom";

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
            <main className="mainContentContainer">
                <Outlet />
            </main>

            <Footer />
        </>
    );
};


export default LandingPage;