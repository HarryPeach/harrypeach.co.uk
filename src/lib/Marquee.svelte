<script>
	import Marquee from 'svelte-fast-marquee';
	let { children } = $props();
</script>

<div class="marquee">
	<Marquee>{@render children()}</Marquee>
</div>

<style>
	.marquee {
		font-size: 1.2em;
		height: 30px;
		width: 100%;
		background: var(--primary-colour);
		border: 2px solid black;
	}

	@keyframes scroll {
		from {
			transform: translateX(0%);
		}
		to {
			transform: translateX(-100%);
		}
	}
</style>
