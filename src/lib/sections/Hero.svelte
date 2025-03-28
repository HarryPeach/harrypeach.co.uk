<script>
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/Scene.svelte';
	import Marquee from '$lib/Marquee.svelte';
	import TopBar from '$lib/TopBar.svelte';
	import Button from '$lib/Button.svelte';
	import Typography from '$lib/Typography.svelte';
</script>

{#snippet gap(amount)}
	<span style={'margin: 0 ' + amount + 'px'}>//</span>
{/snippet}

<div class="container">
	<Canvas id="canvas">
		<Scene />
	</Canvas>

	<div id="hero">
		<div id="flex">
			<TopBar>
				<Button>About</Button>
				<Button>Links</Button>
				<Button>Contact</Button>
				<Button>Projects</Button>
			</TopBar>

			<div>
				<Typography text="Harry Peach" />
				<Typography text="Software Consultant" type="subtitle" />
			</div>
			<Marquee
				>Web Design {@render gap(20)} Software Architecture {@render gap(20)} Scripting {@render gap(
					20
				)} Prototyping
				{@render gap(20)} Code Review {@render gap(20)} Bespoke Programs
			</Marquee>
		</div>
	</div>
</div>

<style>
	.container {
		height: 100vh;
		width: 100vw;
		background-image: radial-gradient(circle at center, rgba(0, 0, 0, 0.1) 0.1rem, transparent 0);
		background-size: 1.5rem 1.5rem;
		background-position:
			0 0,
			0.65rem 0.65rem;
	}

	#hero {
		position: absolute;
		top: 0;
		left: 0;
		text-align: center;
		height: 100vh;
		width: 100vw;
	}

	#flex {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 100%;
	}
</style>
