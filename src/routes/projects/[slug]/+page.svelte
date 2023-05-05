<script lang="ts">
	import type { Project } from "../../../types/project.type";

    export let project: Project;
</script>

<h1>{project.name}</h1>
<h2>{project.desc_long}</h2>