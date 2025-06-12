<script>
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/Scene.svelte';
	import Marquee from '$lib/Marquee.svelte';
	import Typography from '$lib/Typography.svelte';
	import Section from '$lib/sections/Section.svelte';
	import HeadlineCard from '$lib/cards/HeadlineCard.svelte';
</script>

{#snippet gap(/** @type {number} */ amount)}
	<span style={'margin: 0 ' + amount + 'px'}>//</span>
{/snippet}

<Section>
	<HeadlineCard dotted>
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
	</HeadlineCard>

	<Marquee
		>{@render gap(20)} Web Design {@render gap(20)} Software Architecture {@render gap(20)} Scripting
		{@render gap(20)} Prototyping
		{@render gap(20)} Code Review {@render gap(20)} Bespoke Programs {@render gap(20)}
	</Marquee>
</Section>

<style>
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
</style>
