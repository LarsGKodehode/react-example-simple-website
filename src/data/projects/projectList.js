/**
 * List of all the project we want to showcase
 */
const projectList = [
    {
        "projectID": 0,
        "name": "Game Tenzies",
        "tags": ["scrimba", "game"],
        "details": "A React WebApp for playing the game Tenzies",
        "homepage": "https://larsgunnar.no/tenzies/",
        "codeUrl": "https://github.com/LarsGKodehode/tenzies",
    },
    {
        "projectID": 1,
        "name": "Collatz tester",
        "tags": ["kodehode", "mathematics"],
        "details": "A web app for running Collatz conjectures on numbers. Used Webworkers for the heavy calculations",
        "homepage": "https://larsgunnar.no/algorithms/main.html",
        "codeUrl": "https://github.com/LarsGKodehode/algorithms",
    },
];

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