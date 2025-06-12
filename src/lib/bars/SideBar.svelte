<script>
	let { children } = $props();
</script>

<!--
@component
# Side Bar
Used on desktop / wide screen environments to provide a vertical navigation bar on the left side of the screen.

Passes through all children, but intended to be used with `BarElement` components.
-->
<div class="sidebar">
	{@render children()}
</div>

<style>
	.sidebar {
		background: var(--colour-surface-container-highest);
		color: var(--colour-on-surface);
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 10px;

		box-sizing: border-box;
		padding: 0 10px;
		font-size: 1.4em;

		border-radius: 0 var(--units-corner-radius) var(--units-corner-radius) 0;
		margin: 20px 0;
		height: calc(100% - 40px);
	}
</style>
