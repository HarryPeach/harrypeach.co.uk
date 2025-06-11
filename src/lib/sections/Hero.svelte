<script>
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/Scene.svelte';
	import Marquee from '$lib/Marquee.svelte';
	import Typography from '$lib/Typography.svelte';
</script>

{#snippet gap(/** @type {number} */ amount)}
	<span style={'margin: 0 ' + amount + 'px'}>//</span>
{/snippet}

<div class="container">
	<div id="window">
		<div id="peach">
			<Canvas>
				<Scene />
			</Canvas>
		</div>
		<div id="text">
			<Typography text="Harry Peach" color="var(--colour-primary-fixed)" />
			<Typography
				text="Software Consultant"
				type="title"
				color="var(--colour-primary-fixed-dim)"
				style="paint-order: stroke fill; -webkit-text-stroke: 5px black;"
			/>
		</div>
	</div>

	<Marquee
		>{@render gap(20)} Web Design {@render gap(20)} Software Architecture {@render gap(20)} Scripting
		{@render gap(20)} Prototyping
		{@render gap(20)} Code Review {@render gap(20)} Bespoke Programs {@render gap(20)}
	</Marquee>
</div>

<style>
	.container {
		height: 100vh;
		width: 100%;
		display: flex;
		box-sizing: border-box;
		row-gap: 20px;
		column-gap: 20px;
		padding: 20px;
		flex-direction: column;
		justify-content: space-between;
	}

	#window {
		position: relative;
		#peach {
			position: absolute;
			width: 100%;
			height: 100%;
		}

		#text {
			display: flex;
			flex-direction: column;
			position: relative;
			align-items: center;
			justify-content: center;
			z-index: 1;
			height: 100%;
		}

		box-sizing: border-box;
		height: 100%;
		flex: 2;

		background: var(--colour-surface-container-highest);
		border-radius: 24px;
		background-image: radial-gradient(
			circle at center,
			var(--colour-inverse-on-surface) 0.1rem,
			transparent 0
		);
		background-size: 1.5rem 1.5rem;
		background-position:
			0 0,
			0.65rem 0.65rem;
	}
</style>
