<script lang="ts">
    import Hero from "../lib/hero.svelte";
    import Projects from "../lib/projects.svelte";
	import Contact from "../lib/contact.svelte";

    import type { ProjectStore } from "../types/project.type";

    export let data: ProjectStore;
</script>

<Hero />
<Projects projects={data.projects} />
<Contact />