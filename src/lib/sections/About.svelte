<script>
	import Typography from '$lib/Typography.svelte';
</script>

<div class="container" id="about">
	<div class="content">
		<div class="card image"></div>
		<div class="card">
			<Typography type="title" text="About"></Typography>
		</div>
	</div>
</div>

<style>
	.container {
		height: 100vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;

		.content {
			background: red;
			border-radius: 24px;
			/* TODO: Switch these to max width/height */
			width: 800px;
			height: 400px;
			display: grid;
			grid-template-columns: 1fr 2fr;
			grid-template-rows: 1fr;

			.card {
				padding: 20px;
				border-radius: 24px;
			}

			.image {
				background: url(https://fastly.picsum.photos/id/852/200/300.jpg?hmac=6IMZOkPF_q5nf8IwfYdfxPUyKnyPL1w8moDjTeMOT5g);
				/* background-repeat: no-repeat; */
				background-position: center;
				background-size: cover;
			}
		}
		@media (max-width: 768px) {
			/* adjust breakpoint as needed */
			.content {
				grid-template-columns: 1fr;
				grid-template-rows: 2fr 1fr;
			}
		}
	}
</style>
