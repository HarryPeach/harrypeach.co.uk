<script>
	let { children } = $props();
</script>

<div class="topbar">
	<div class="img">
		<img src="/assets/peach.png" alt="Peach Icon" />
	</div>
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

		background: white;
		width: 100%;
		border-bottom: 2px solid black;
		font-size: 1.4em;
		max-height: 100px;

		img {
			display: block;
			margin: auto 0;
			max-height: 30px;
		}
	}
</style>
