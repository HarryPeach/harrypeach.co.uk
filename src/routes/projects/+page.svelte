<script>
	import Window from '$lib/Window.svelte';

	import Projects from "$lib/assets/projects.json";

	const vocational_projects = Projects.vocational;
	const educational_projects = Projects.educational;
</script>

<div class="container">
	<Window title={'Projects'} content_title={'Projects'} selected={2}>
		<h2>Vocational</h2>
		{#each vocational_projects as project}
			<div class="project">
				<img src="https://picsum.photos/250/180" alt="A placeholder" />
				<div class="content">
					<h3>{project.title}</h3>
					<p>
						{project.desc}
					</p>
					{#each project.links as link}
						<a href={link.url}>{link.name}</a>
					{/each}
				</div>
			</div>
		{/each}
		<h2>Educational</h2>
		{#each Projects.educational as project}
			<div class="project">
				<img src="https://picsum.photos/250/180" alt="A placeholder" />
				<div class="content">
					<h3>{project.title}</h3>
					<p>
						{project.desc}
					</p>
					{#each project.links as link}
						<a href={link.url}>{link.name}</a>
					{/each}
				</div>
			</div>
		{/each}
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
