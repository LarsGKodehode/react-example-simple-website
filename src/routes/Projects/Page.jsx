// Libraries
import {
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import {
    useState,
} from "react";

// Data
import { getProjects } from "data/projects";

// Components
import Project from "components/Project";
import QueryLink from "components/QueryLink";


/**
 * Generates a list of links to projects
 */
function listProjects(list) {
    const projectList = list.map(
        (project) => {
        return (
            <li>
                <QueryLink
                    to={project.projectID}
                >
                    {project.name}
                </QueryLink>
            </li>
        );
    });

    return projectList;
};


/**
 * Page for showcasing all the projects
 */
function Projects() {
    const [ projectList ] = useState(getProjects());

    return (
        <div className="mainContentContainer">
            <h1>Projects Page</h1>

            <ul>
                {listProjects(projectList)}
            </ul>

            <Routes>
                <Route path="/:projectID" element={<Project />}/>
            </Routes>

            <Outlet />
        </div>
    );
};


export default Projects;