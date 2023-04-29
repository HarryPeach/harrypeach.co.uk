<script>
	import ProjectCard from './projects/project_card.svelte';
</script>

<div class="container">
    <h1>Projects</h1>
	<section id="name">
		<ProjectCard />
		<ProjectCard />
		<ProjectCard />
		<ProjectCard />
		<ProjectCard />
		<ProjectCard />
	</section>
</div>

<style>
	.container h1 {
		font-family: 'Roboto Slab', serif;
		font-size: 2.5em;
		margin: 40px;
	}

	section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
		justify-content: center;
    }
    
	.container {
		display: flex;
        min-width: 400px;
        box-sizing: border-box;
        padding: 0 50px 50px 50px;
        font-family: 'Space Grotesk', sans-serif;
        background: white;
        border-left: 2px solid black;
        border-bottom: 2px solid black;
        font-size: 1.4em;
		flex-direction: row;
		align-items: stretch;
		justify-content: center;
		width: 100vw;
		flex-wrap: wrap;
	}
</style>
