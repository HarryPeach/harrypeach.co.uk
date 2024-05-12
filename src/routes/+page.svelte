<script>
	import Marquee from 'svelte-fast-marquee';
	import UnderConstruction from '$lib/assets/under_construction.gif';
	import Window from '$lib/Window.svelte';
</script>

<div class="container">
	<Window title={'Home'} selected={0}>
		<h1 class="title">Harry Peach</h1>
		<Marquee>welcome to my epic website!!</Marquee>
		<img src={UnderConstruction} alt="Under Construction" />
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
