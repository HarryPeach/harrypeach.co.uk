<script>
	let containerWidth = 0;
	let textWidth = 0;

	export let text = '';
	export let speed = 100; // pixels per second

	$: clonesNeeded =
		textWidth > 0 && containerWidth > 0 ? Math.ceil((containerWidth * 2) / textWidth) : 0;

	$: duration = textWidth > 0 ? ((textWidth * clonesNeeded) / speed) * 1000 : 0;
</script>

<div class="marquee" bind:clientWidth={containerWidth}>
	{#if containerWidth > 0}
		<div class="track" style="--duration: {duration}ms">
			{#each Array(clonesNeeded) as _, i}
				<span class="content" class:first={i === 0}>{text}</span>
			{/each}
		</div>
	{/if}
	<span class="measurer" bind:offsetWidth={textWidth}>{text}</span>
</div>

<style>
	.marquee {
		font-size: 1.2em;
		height: 30px;
		width: 100%;
		background: var(--primary-colour);
		border: 2px solid black;
		overflow: hidden;
		position: relative;
	}

	.track {
		position: absolute;
		display: flex;
		animation: scroll linear infinite;
		animation-duration: var(--duration);
	}

	.content {
		flex-shrink: 0;
		white-space: nowrap;
		padding: 0 20px;
	}

	.measurer {
		position: absolute;
		visibility: hidden;
		height: 0;
		white-space: nowrap;
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
