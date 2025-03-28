<script>
	let { type = 'title', text } = $props();
</script>

{#if type == 'title'}
	<h1>{text}</h1>
{:else if type == 'subtitle'}
	<h2>{text}</h2>
{/if}

<style>
	h1,
	h2 {
		margin: 0;
	}
	h1 {
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
