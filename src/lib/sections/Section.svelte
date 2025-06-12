<script>
	let { children } = $props();
</script>

<!--
@component
# Section
This component provides a semantic section for grouping content, as well as styling a full page area for any content.
-->
<section class="section">
	{@render children()}
</section>

<style>
	.section {
		height: 100%;
		width: 100%;
		display: flex;
		box-sizing: border-box;
		row-gap: 20px;
		column-gap: 20px;
		padding: 20px;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
