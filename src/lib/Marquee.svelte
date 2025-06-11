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
		height: 3em;
		line-height: 3em;
		background: var(--colour-tertiary-container);
		color: var(--colour-on-tertiary-container);
		border-radius: 12px;
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
