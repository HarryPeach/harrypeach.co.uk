import projects from "../lib/data/projects.json";

export function load({ params }: { params: any }): { projects: typeof projects } {
    return {
        projects: projects
    };
}