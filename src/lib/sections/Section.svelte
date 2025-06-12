<script>
	let { children } = $props();
</script>

<div class="backing-card">
	{@render children()}
</div>

<style>
	.backing-card {
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
