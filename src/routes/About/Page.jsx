// data
import { content } from "./content";

// CSS
import styles from "./layout.module.css";


function randomFact() {
    const randomIndex = Math.floor(Math.random() * content.interrests.length);
    const fact = content.interrests[randomIndex];

    return (
        <p>Random fact: {fact}</p>
    );
};


/**
 * Page for telling something about us
 */
function AboutPage() {
    return (
        <div className={[
                styles.container,
                "mainContentContainer",
            ].join(" ")}
        >
            <h1>This is the about us page</h1>
            <div>
                <h1>{content.names.join(" ") + " " + content.sureName}</h1>
                <p>Gender: {content.gender}</p>
                <p>Age: {content.age}</p>
                {randomFact()}
            </div>
        </div>
    );
};


export default AboutPage;