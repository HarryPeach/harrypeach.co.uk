<script>
	let { type = 'title', text, color = undefined, style = '' } = $props();
</script>

{#if type == 'title'}
	<h1 style="color: {color ? color : 'white'}; {style}">{text}</h1>
{:else if type == 'subtitle'}
	<h2 style="color: {color}; {style}">{text}</h2>
{/if}

<style>
	h1,
	h2 {
		margin: 0;
		font-family: 'Chewy', sans-serif;
	}
	h1 {
		font-size: 20vmin;
		margin: 0.15em;
		paint-order: stroke fill;
		-webkit-text-stroke: 20px #000;
	}
	h2 {
		font-size: 2.6em;
	}
</style>
