<script>
	import Window from '$lib/Window.svelte';
</script>

<div class="container">
	<Window title={'Projects'} content_title={'Projects'} selected={2}>
		<h2>Vocational</h2>
		<div class="project">
			<img src="https://picsum.photos/250/180" alt="A placeholder" />
			<div class="content">
				<h3>Example Project Title</h3>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut maiores amet autem adipisci
					id natus in illo accusantium. Quia suscipit labore ea cupiditate necessitatibus tempora
					minus voluptatibus quibusdam? Molestiae, delectus!
				</p>
				<a href="#">Link Here</a>
			</div>
		</div>
		<div class="project">
			<img src="https://picsum.photos/250/180" alt="A placeholder" />
			<div class="content">
				<h3>Example Project Title</h3>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut maiores amet autem adipisci
					id natus in illo accusantium. Quia suscipit labore ea cupiditate necessitatibus tempora
					minus voluptatibus quibusdam? Molestiae, delectus!
				</p>
				<a href="#">Link Here</a>
			</div>
		</div>
		<div class="project">
			<img src="https://picsum.photos/250/180" alt="A placeholder" />
			<div class="content">
				<h3>Example Project Title</h3>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut maiores amet autem adipisci
					id natus in illo accusantium. Quia suscipit labore ea cupiditate necessitatibus tempora
					minus voluptatibus quibusdam? Molestiae, delectus!
				</p>
				<a href="#">Link Here</a>
			</div>
		</div>
		<h2>Academic</h2>
		<div class="project">
			<img src="https://picsum.photos/250/180" alt="A placeholder" />
			<div class="content">
				<h3>Example Project Title</h3>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut maiores amet autem adipisci
					id natus in illo accusantium. Quia suscipit labore ea cupiditate necessitatibus tempora
					minus voluptatibus quibusdam? Molestiae, delectus!
				</p>
				<a href="#">Link Here</a>
			</div>
		</div>
	</Window>
</div>

<style>
	.container {
		margin-top: 10%;
	}

	.project {
		margin: 20px;
		display: flex;
	}

	.project .content {
		padding: 12px 24px;
	}

	.project h3 {
		font-size: 1.6em;
		margin-top: 0;
	}

	.project p {
		padding: 12px 0;
	}
</style>
