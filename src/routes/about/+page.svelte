<script>
	import Window from '$lib/Window.svelte';
    import Profile from "$lib/assets/profile.jpg";
</script>

<div class="container">
	<Window title={'About'} content_title={"About Me"} selected={1}>
		<div class="about-content">
			<div class="image">
				<img src={Profile} width="300px" alt={"Placeholder profile image"} />
			</div>
			<div class="content">
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo sapiente non corrupti quidem assumenda! Minus eum sapiente reiciendis aliquid id tempora! Nesciunt eius sunt voluptate deleniti corporis ut provident at.</p>
			</div>
		</div>
	</Window>
</div>

<style>
	.container {
		margin-top: 10%;
	}

	.about-content {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.image {
		flex-grow: 1;
		padding: 10px;
	}

	.content {
		padding: 10px;
		flex-grow: 2;
		text-align: center;
		min-width: 100px;
		max-width: 400px;
	}
</style>

