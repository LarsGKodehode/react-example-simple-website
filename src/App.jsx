// Libraries
import {
    Route,
    Routes,
} from "react-router-dom";

// Routes
import About from "routes/About";
import Contact from "routes/Contact";
import Home from "routes/Page";
import Projects from "routes/Projects";

// Components
import Navbar from "components/Navbar";
import Footer from "components/Footer";


/**
 * This is the main application component
 */
function App() {
    return (
        <>
            <Navbar />
            
            <main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Projects/*" element={<Projects />}/>
                    <Route path="/About" element={<About />}/>
                    <Route path="/Contact" element={<Contact />}/>
                </Routes>
            </main>

            <Footer />
        </>
    );
};


export default App;