// Libraries
import {
    useParams
} from "react-router-dom";

// CSS
import styles from "./layout.module.css";

// Data
import { getProject } from "data/projects";


function Project() {
    const { projectID } = useParams();
    const project = getProject(parseInt(projectID));

    // Simple way of error handling
    if (!project) {
        return (
            <h2>404: Project not found</h2>
        );
    };

    return (
        <section className={styles.container}>
            <h1>Project: {project.name}</h1>
            <p>{project.details}</p>
            
            <ul className={styles.projectLinksList}>
                <li><a target="__blank" href={project.homepage}>Page</a></li>
                <li><a target="__blank" href={project.codeUrl}>Code</a></li>
            </ul>

        </section>
    );
};


export default Project;