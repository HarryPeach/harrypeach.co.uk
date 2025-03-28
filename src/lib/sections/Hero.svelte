<script>
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/Scene.svelte';
	import Marquee from '$lib/Marquee.svelte';
	import TopBar from '$lib/TopBar.svelte';
	import Button from '$lib/Button.svelte';
	import Typography from '$lib/Typography.svelte';
</script>

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
			<Marquee>Software Consultant // Full-stack Engineer //</Marquee>
		</div>
	</div>
</div>

<style>
	.container {
		height: 100vh;
		width: 100vw;
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
