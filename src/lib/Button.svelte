<script>
	let { children, ...rest } = $props();
</script>

<button {...rest}>
	{@render children()}
</button>

<style>
	button {
		border: 2px solid black;
		padding: 10px;
		border-radius: 10px;
		background: white;
		cursor: pointer;
		font-family: unset;
		font-size: 1em;
	}

	button:hover {
		background: var(--primary-colour);
		color: white;
	}
</style>
