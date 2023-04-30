import projects from "../lib/data/projects.json"

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        projects: projects
    };
}