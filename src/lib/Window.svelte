<script>
	import Home from '$lib/assets/icon_home.png';
	import About from '$lib/assets/icon_about.png';
    import Projects from "$lib/assets/icon_projects.png";
    import Contact from "$lib/assets/icon_contact.png";

    export let title = "Untitled";
	export let content_title = "";
    export let selected = -1;
</script>

<div class="window">
	<div class="titlebar">
		<div class="title">{title}</div>
		<div class="control_buttons">
			<div class="control_button" />
			<div class="control_button" />
			<div class="control_button" />
		</div>
	</div>
	<div class="buttonbar">
        <a href="/">
            <div class="nav_button" id={selected === 0 ? "selected" : ""}>
                <img src={Home} alt="Home" />
                <p>Home</p>
            </div>
        </a>
        <a href="/about">
            <div class="nav_button" id={selected === 1 ? "selected" : ""}>
                <img src={About} alt="About Me" />
                <p>About</p>
            </div>
        </a>
        <a href="/projects">
            <div class="nav_button" id={selected === 2 ? "selected" : ""}>
                <img src={Projects} alt="Projects" />
                <p>Projects</p>
            </div>
        </a>
        <a href="/contact">
            <div class="nav_button" id={selected === 3 ? "selected" : ""}>
                <img src={Contact} alt="Contact Me" />
                <p>Contact Me</p>
            </div>
        </a>
	</div>
	<div class="content">
		<h1 class="content-title">{content_title}</h1>
        <slot />
	</div>
</div>

<style>
	.content-title {
		text-align: center;
		font-size: 4em;
		font-weight: 900;
		margin: .6em 0;
	}

	.window {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: fit-content;
		padding: 2px;
		background: #a5a5a5;
		border-top: solid 1px #cccccc;
		border-left: solid 1px #cccccc;
		border-bottom: solid 1px #888888;
		border-right: solid 1px #888888;
	}

    a {
        color: white;
    }

	.content {
		text-align: left;
		margin-top: 2px;
		background: white;
		padding: 24px;
		color: black;
		border-top: solid 2px #333;
		border-left: solid 2px #333;
		border-bottom: solid 2px #ddd;
		border-right: solid 2px #ddd;
		height: 100%;
	}

	.title {
		flex-grow: 2;
	}

	.control_button {
		width: 14px;
		height: 14px;
		display: block;
		float: right;
		margin: 0 1px;
		background: #a5a5a5;
		border-top: solid 1px #cccccc;
		border-left: solid 1px #cccccc;
		border-bottom: solid 1px #333;
		border-right: solid 1px #333;
	}

	.nav_button {
		border: 1px solid #888;
		max-width: 60px;
        min-width: 50px;
		padding: 4px;
		margin: 2px 2px 0 0;
        float: left;
        user-select: none;
        font-family: monospace;
	}

    .nav_button img {
        width: 32px;
    }

	.nav_button:hover {
		background: #b5b5b5;
	}

    .nav_button#selected {
        background: #555;
    }

	.titlebar {
		display: flex;
		background: linear-gradient(to right, rgb(5, 5, 148), rgb(74, 107, 252));
		height: 16px;
		padding: 4px;
		text-align: left;
		font-family: monospace;
		font-weight: bold;
		align-items: center;
	}
</style>
