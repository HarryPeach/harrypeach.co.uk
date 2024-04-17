<script>
	import Marquee from 'svelte-fast-marquee';
    import UnderConstruction from "$lib/assets/under_construction.gif";
</script>

<div class="container">
	<h1 class="title">Harry Peach</h1>
	<Marquee>welcome to my epic website!!</Marquee>
    <img src={UnderConstruction} alt="Under Construction">
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
