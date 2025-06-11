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

		.content {
			background: red;
			border-radius: 24px;
			/* TODO: Switch these to max width/height */
			width: 800px;
			height: 400px;
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

			.card {
				padding: 20px;
				border-radius: 24px;
				border: 1px dotted black;
			}

			.image {
				background: url(https://fastly.picsum.photos/id/852/200/300.jpg?hmac=6IMZOkPF_q5nf8IwfYdfxPUyKnyPL1w8moDjTeMOT5g);
				/* background-repeat: no-repeat; */
				background-position: center;
				background-size: cover;
			}
		}
		.content > div:nth-child(2) {
			grid-column: span 2;
		}
	}
</style>
