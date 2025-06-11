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
		border: 2px solid var(--colour-on-secondary-container);
		padding: 5px 10px;
		border-radius: 10px;
		color: var(--colour-on-secondary-container);
		background: var(--colour-secondary-container);
		cursor: pointer;
		font-family: unset;
		font-size: 1em;
	}

	button:hover {
		color: var(--colour-on-secondary-container);
	}
</style>
