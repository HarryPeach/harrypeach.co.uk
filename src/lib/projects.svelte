<script>
	import ProjectCard from './projects/project_card.svelte';
</script>

<div class="container">
    <h1>Projects</h1>
	<p id="subtitle">
		Here's some of the projects I've worked on recently that I'm most proud of!
	</p>
	<section id="name">
		<ProjectCard />
		<ProjectCard />
		<ProjectCard />
		<ProjectCard />
	</section>
</div>

<style>
	.container h1 {
        font-family: "Archivo Black", sans-serif;
		font-size: 2.5em;
		margin: 0 40px 40px 40px;
		width: 100%;
		text-align: center;
	}

	#subtitle {
		display: block;
		padding: 0 20px 20px 20px;
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
        padding: 50px 50px;
        font-family: 'Space Grotesk', sans-serif;
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
