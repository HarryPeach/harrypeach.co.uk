<script>
	import Typography from '$lib/Typography.svelte';
</script>

<div class="container" id="about">
	<div class="backing-card">
		<div class="content">
			<div class="card image"></div>
			<div class="card">
				<Typography type="title" text="About" color="var(--colour-on-surface)"></Typography>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic at asperiores ex in
					consectetur perferendis non, harum quis dolor consequatur beatae cupiditate maiores
					laudantium quae minima quidem? Quam, aliquam illo.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus delectus sit inventore,
					error illum nam quis architecto unde at veritatis laborum eum impedit dolor! Earum debitis
					similique expedita impedit laboriosam?
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		box-sizing: border-box;
		min-height: 100vh;
		width: 100%;
		padding: 20px;

		.content {
			background: var(--colour-surface-container-high);
			color: var(--colour-on-surface);
			border-radius: var(--units-corner-radius);
			max-width: 800px;
			display: grid;
			grid-template-columns: 1fr 2fr;
			grid-template-rows: 1fr;

			.card {
				padding: 20px;
				border-radius: var(--units-corner-radius);
			}

			.image {
				min-height: 300px;
				background: url(https://thispersondoesnotexist.com/);
				background-position: center;
				background-size: cover;
			}

			p {
				font-size: 1.2em;
			}
		}
		@media (max-width: 768px) {
			.content {
				grid-template-columns: 1fr;
				grid-template-rows: 1fr 1fr;
			}
		}

		.backing-card {
			display: flex;
			justify-content: center;
			align-items: center;
			background: var(--colour-surface-container);
			border-radius: var(--units-corner-radius);
			width: 100%;
			min-height: 100vh;
		}
	}
</style>
