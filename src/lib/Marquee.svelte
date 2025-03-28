<script>
	import Marquee from 'svelte-fast-marquee';
</script>

<div class="marquee">
	<Marquee>I can be a Svelte component, multiple Svelte components, or just some text.</Marquee>
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
