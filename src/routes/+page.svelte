<script>
	import Marquee from '$lib/Marquee.svelte';
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/Scene.svelte';
</script>

<Canvas id="canvas">
	<Scene />
</Canvas>

<div id="hero">
	<div id="flex">
		Links and that
		<h1 id="name_title">Harry Peach</h1>
		<Marquee text="Example Text" speed={50} />
	</div>
</div>

<style>
	#hero {
		position: absolute;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		text-align: center;
	}

	#flex {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 100%;
	}

	#name_title {
		font-size: 8em;
		color: var(--primary-colour);
		text-shadow: 
    /* Diagonal shadow for top-left corner */
			-3px -3px 0 #000000,
			/* Diagonal shadow for top-right corner */ 3px -3px 0 #000000,
			/* Diagonal shadow for bottom-left corner */ -3px 3px 0 #000000,
			/* Diagonal shadow for bottom-right corner */ 3px 3px 0 #000000,
			/* Horizontal shadow on the left side */ -3px 0 0 #000000,
			/* Horizontal shadow on the right side */ 3px 0 0 #000000,
			/* Vertical shadow on the top */ 0 -3px 0 #000000,
			/* Larger vertical shadow at the bottom left */ -3px 8px 0 #000000,
			/* Larger vertical shadow at the bottom right */ 3px 8px 0 #000000;
	}
</style>
