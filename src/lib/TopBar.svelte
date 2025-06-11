<script>
	let { children } = $props();
</script>

<div class="topbar">
	<div class="content">
		{@render children()}
	</div>
</div>

<style>
	.topbar {
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		gap: 10px;

		width: 100%;
		font-size: 1.4em;
		max-height: 100px;
	}
</style>
