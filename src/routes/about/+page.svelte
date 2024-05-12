<script>
	import Window from '$lib/Window.svelte';
</script>

<div class="container">
	<Window title={'About'} selected={1}>
		<h1 class="title">About Me</h1>
        <img src={"https://via.assets.so/img.jpg?w=300&h=400&tc=blue&bg=#cecece&t=Profile"} alt={"Placeholder profile image"} />
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

