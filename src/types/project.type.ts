export type ProjectStore = {
    projects: Array<Project>
}

export type Project = {
    id: string
    name: string
    desc_short: string
    desc_long: string
    tags: Array<string>
}