<script lang="ts">
	import TiArrowRight from 'svelte-icons/ti/TiArrowRight.svelte';
	import ProjectCard from './projects/project_card.svelte';

	// TODO: Refactor Type
	export let projects: any;
</script>

<div class="container">
	<h1>Projects</h1>
	<p id="subtitle">Here's some of the projects I've worked on recently that I'm most proud of!</p>
	<section id="name">
		{#each projects as project}
			<ProjectCard project={project} />
		{/each}
		<!-- <ProjectCard /> -->
		<!-- <ProjectCard /> -->
		<!-- <ProjectCard /> -->
		<!-- <ProjectCard /> -->
	</section>
	<a href="projects" id="more_projects">
		More projects <div class="icon"><TiArrowRight /></div>
	</a>
</div>

<style>
	.icon {
		color: black;
		display: inline-block;
		top: .4em;
		position: relative;
		width: 32px;
		height: 32px;
	}

	.container h1 {
		font-family: 'Archivo Black', sans-serif;
		font-size: 2.5em;
		margin: 0 40px 40px 40px;
		width: 100%;
		text-align: center;
	}

	#more_projects {
		margin: 0 auto;
		padding: 20px 20px 0 20px;
		cursor: pointer;
	}

	#subtitle {
		display: block;
		margin: 0 auto;
		padding: 0 20px 20px 20px;
	}

	section {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}

	a {
		text-decoration: underline;
		color: black;
	}

	.container {
		display: flex;
		min-width: 400px;
		box-sizing: border-box;
		padding: 50px 50px;
		font-family: 'Space Grotesk', sans-serif;
		border-left: 2px solid black;
		border-bottom: 2px solid black;
		font-size: 1.4em;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		width: 100vw;
		flex-wrap: wrap;
	}
</style>
