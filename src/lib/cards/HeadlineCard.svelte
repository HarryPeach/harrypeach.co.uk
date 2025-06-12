<script>
	let { children, dotted = false } = $props();
</script>

<!--
@component
# HeadlineCard
A full size page card that is used to hold content within a section.

## Props
- `dotted`: If true, the card will have a dotted background pattern.
-->
<div class="headline-card {dotted ? 'dotted' : ''}">
	{@render children()}
</div>

<style>
	.headline-card {
		position: relative;
		box-sizing: border-box;
		height: 100%;

		background: var(--colour-surface-container);
		border-radius: var(--units-corner-radius);
	}

	.dotted {
		background-image: radial-gradient(
			circle at center,
			var(--colour-outline-variant) 0.1rem,
			transparent 0
		);
		background-size: 1.5rem 1.5rem;
		background-position:
			0 0,
			0.65rem 0.65rem;
	}
</style>
