<script>
	let { children, text, selected = false } = $props();
</script>

<!--
@component
# Bar Element
An element used for a specific item in either a TopBar or SideBar.

## Props
- `selected`: If true, element will be highlighted as selected.
-->
<div class="element {selected ? 'selected' : ''}">
	<div class="icon">
		{@render children()}
	</div>
	<span class="text">
		{text}
	</span>
</div>

<style>
	.element {
		border-radius: 20px;
		text-align: center;
		padding: 12px;
		min-width: 50px;
		min-height: 50px;
		cursor: pointer;

		display: flex;
		flex-direction: column;
		justify-content: center;

		.icon {
			display: flex;
			width: 100%;
			height: 100%;
			align-items: center;
			justify-content: center;
		}

		.text {
			font-size: 0.8em;
		}
	}
	.selected {
		background: var(--colour-outline);
		color: var(--colour-inverse-on-surface);
	}
</style>
