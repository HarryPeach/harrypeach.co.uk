import { error } from '@sveltejs/kit';
import projects from "../../../lib/data/projects.json"

import type { PageLoad } from "./$types";
import type { Project } from '../../../types/project.type';

export function load({ params }): PageLoad | Project {
    const ids = projects.map(n => {
        return n.id;
    });

    // check if the requested slug is in the list of ids
    if (ids.includes(params.slug)) {
        return projects.find(x => x.id == params.slug) as Project;
    }

    throw error(404, 'Not found');
}