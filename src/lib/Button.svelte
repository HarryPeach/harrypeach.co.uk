<script>
	let { children, href, ...rest } = $props();
</script>

<a {href}>
	<button {...rest}>
		{@render children()}
	</button>
</a>

<style>
	button {
		border: 2px solid black;
		padding: 5px 10px;
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
