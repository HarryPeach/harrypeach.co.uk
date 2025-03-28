<script>
	let { children } = $props();
</script>

<div class="topbar">
	{@render children()}
</div>

<style>
	.topbar {
		background: white;
		width: 100%;
		border-bottom: 2px solid black;
		padding: 20px;
		font-size: 1.4em;
	}
</style>
