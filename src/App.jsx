// Libraries
import {
    Route,
    Routes,
} from "react-router-dom";

// Routes
import LandingPage from "routes/Page";
import Home from "routes/Home";
import About from "routes/About";
import Contact from "routes/Contact";
import Projects from "routes/Projects";


/**
 * This is the main application component
 */
function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />}>
                <Route path="/" element={<Home />}/>
                <Route path="/Projects/*" element={<Projects />}/>
                <Route path="/About" element={<About />}/>
                <Route path="/Contact" element={<Contact />}/>
            </Route>
        </Routes>
    );
};


export default App;