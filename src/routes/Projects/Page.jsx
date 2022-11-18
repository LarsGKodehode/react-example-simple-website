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
import SearchProjects from "components/SearchProjects";


/**
 * Generates a list of links to projects
 */
function listProjects(list, filter) {
    let filterdList = list

    if(filter) {
        const filterFormatted = filter.toLowerCase();

        filterdList = list.filter(
            (project) => {
                return (
                    project.name.toLowerCase().includes(filterFormatted)
                    || project.tags.join(" ").toLowerCase().includes(filterFormatted)
                )
            }
        );
    };

    const projectList = filterdList.map(
        (project) => {
            return (
                <li key={project.projectID}>
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
    const [ filter, setFilter ]  = useState("");

    return (
        <>
            <h1>Projects Page</h1>

            <SearchProjects
                updateFilter={setFilter}
            />

            <ul>
                {listProjects(projectList, filter)}
            </ul>

            <Routes>
                <Route path="/:projectID" element={<Project />}/>
            </Routes>

            <Outlet />
        </>
    );
};


export default Projects;