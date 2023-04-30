<script>
	import ProjectCard from './projects/project_card.svelte';
</script>

<div class="container">
    <h1>Contact Me</h1>
	<section id="name">

	</section>
</div>

<style>
	.container h1 {
		font-family: 'Archivo Black', serif;
		font-size: 2em;
        margin: 0 0 20px 0;
	}

	section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    
	.container {
		display: flex;
        min-width: 400px;
        box-sizing: border-box;
        padding: 5vw;
        font-family: 'Space Grotesk', sans-serif;
        background: rgb(255, 230, 106);
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
