/**
 * List of all the project we want to showcase
 */
import projectList from "./projectList.json";


// These methods are how we are going to access our list

/**
 * Returns all the stored projects
 */
export function getProjects() {
    return projectList || null;
};

/**
 * Returns a single project
 */
export function getProject(projectID) {
    const project = projectList.find(
        (project) => project.projectID === projectID
    );

    return project || null;
};