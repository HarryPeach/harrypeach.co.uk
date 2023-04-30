import { error } from '@sveltejs/kit';
import projects from "../../../lib/data/projects.json"

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const ids = projects.map(n => {
        return n.id;
    });

    console.log()

    if (ids.includes(params.slug)) {
        return projects.find(x => x.id == params.slug);
    }

    throw error(404, 'Not found');
}