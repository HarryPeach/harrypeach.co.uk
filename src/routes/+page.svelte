<script>
	import About from '$lib/sections/About.svelte';
	import Contact from '$lib/sections/Contact.svelte';
	import Hero from '$lib/sections/Hero.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import SideBar from '$lib/bars/SideBar.svelte';
	import BarElement from '$lib/bars/BarElement.svelte';
	import HouseOutlineRounded from 'virtual:icons/material-symbols/house-outline-rounded';
	import PersonOutlineRounded from 'virtual:icons/material-symbols/person-outline-rounded';
	import ScienceOutline from 'virtual:icons/material-symbols/science-outline';
	import MailOutlineRounded from 'virtual:icons/material-symbols/mail-outline-rounded';
</script>

<div class="flow-row">
	<div class="sidebar">
		<SideBar>
			<BarElement text="Home" selected>
				<HouseOutlineRounded />
			</BarElement>
			<BarElement text="About">
				<PersonOutlineRounded />
			</BarElement>
			<BarElement text="Projects">
				<ScienceOutline />
			</BarElement>
			<BarElement text="Contact">
				<MailOutlineRounded />
			</BarElement>
		</SideBar>
	</div>
	<div class="content">
		<Hero />
		<About />
		<Projects />
		<Contact />
	</div>
</div>

<style>
	.flow-row {
		display: flex;
		flex-direction: row;
		height: 100vh;
		overflow: hidden;
	}
	.sidebar {
		position: sticky;
		top: 0;
	}
	.content {
		overflow-y: auto;
		flex-grow: 1;
	}
</style>
