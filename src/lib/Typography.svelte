<script>
	let { type = 'headline', text, color = undefined, style = '' } = $props();
</script>

{#if type == 'headline'}
	<h1 style="color: {color ? color : 'var(--colour-primary)'}; {style}">{text}</h1>
{:else if type == 'title'}
	<h2 style="color: {color ? color : 'var(--colour-inverse-primary)'}; {style}">{text}</h2>
{/if}

<style>
	h1,
	h2 {
		margin: 0;
		font-family: 'Chewy', sans-serif;
	}
	h1 {
		font-size: 16vmin;
		margin: 0.15em;
		paint-order: stroke fill;
		-webkit-text-stroke: 2vmin #000;
	}
	h2 {
		font-size: 2.6em;
	}
</style>
