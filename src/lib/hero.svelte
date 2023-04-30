<div class="container">
	<section id="name">
		<div id="background" />
		<div id="content">
			<!-- <img src="pattern.svg" alt=""> -->
			<h1>Harry Peach</h1>
		</div>
	</section>
	<section id="list">
		<p id="subtitle">
			I'm a UK based Software Engineer, currently working at <a href="http://jlr.com"
				>Jaguar Land Rover</a
			>. But I do a bunch of other things too!
		</p>
		<ul>
			<li>Software Engineering</li>
			<li>Web Design</li>
			<li>Research</li>
			<li>Digital Art</li>
		</ul>
		<p id="subtitle">Feel free to have a look around :)</p>
	</section>
</div>

<style>
	@keyframes bgScroll {
		0% {
			background-position: 0px 0px;
		}
		100% {
			background-position: -6000px -6000px;
		}
	}
	h1 {
		font-family: 'Archivo Black', sans-serif;
		font-size: 7em;
		text-shadow: 6px 6px 0 #000;
		text-transform: lowercase;
		-webkit-text-stroke: 4px black;
		color: white;
		font-weight: 500;
		text-align: center;
	}

	ul {
		width: 80%;
	}

	li {
		margin: 10px 0;
	}

	li::marker {
		content: '> ';
	}

	section {
		display: flex;
		padding: 5vw;
		border-left: 2px solid black;
		border-bottom: 2px solid black;
		align-items: center;
		justify-content: center;
		flex: 1;
		flex-direction: column;
		min-width: 400px;
	}

	section #subtitle {
		margin: 20px 0;
	}

	a {
		color: black;
		text-decoration: none;
		font-weight: 700;
	}

	a:hover {
		text-decoration: underline;
	}

	#name {
		justify-content: center;
		background: url('pattern.svg');
		background-size: 100%;
		background-attachment: fixed;
		animation: bgScroll 200s linear infinite;
	}

	#list {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 1.4em;
		background: rgb(153, 255, 153);
		align-items: start;
	}

	.container {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		justify-content: center;
		height: 600px;
		width: 100vw;
		flex-wrap: wrap;
	}
</style>
