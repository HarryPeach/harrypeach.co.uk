<script>
	import Window from '$lib/Window.svelte';
</script>

<div class="container">
	<Window title={'Projects'} selected={2}>
		<h1 class="title">Projects</h1>
	</Window>
</div>

<style>
	.title {
		font-size: 4em;
		font-weight: 900;
	}

	.container {
		margin-top: 10%;
	}
</style>

