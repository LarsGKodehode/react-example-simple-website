// Libraries
import React from "react"
import ReactDOM from "react-dom/client"
import {
    HashRouter as Router
} from "react-router-dom";

// Styling
import "styles/basic.css";
import "styles/colors.css";
import "styles/lengths.css";
import "styles/containerLayout.css";

// App component
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);