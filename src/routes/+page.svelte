<script>
	import Marquee from 'svelte-fast-marquee';
	import UnderConstruction from '$lib/assets/under_construction.gif';
	import Window from '$lib/Window.svelte';
</script>

<div class="container">
	<Window title={'Home'} content_title={"Harry Peach"} selected={0}>
		<Marquee>welcome to my epic website!!</Marquee>
		<img src={UnderConstruction} alt="Under Construction" />
	</Window>
</div>

<style>
	.container {
		margin-top: 10%;
	}
</style>
