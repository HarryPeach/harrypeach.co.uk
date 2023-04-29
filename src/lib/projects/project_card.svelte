<div class="container">
    <div id="image_container" />
	<h1>Example Project</h1>
    <p>This is an example project</p>
    <div>
        <div class="chip">3d</div>
        <div class="chip">svelte</div>
        <div class="chip">web</div>
        <div class="chip">open</div>
        <div class="chip">proprietary</div>
    </div>
</div>

<style>
	.container {
		border: 2px solid black;
		padding: 10px;
		border-radius: 10px;
		max-width: 300px;
        margin: 10px;
        background: rgb(255, 123, 226);
        transition: .3s;
	}
    
    .container:hover {
        box-shadow: 2px 4px 0px 1px #000;
        cursor: pointer;
    }

    .chip {
        display: inline-block;
        background: white;
        font-size: .6em;
        padding: 10px;
        width: fit-content;
        margin: 10px 5px 0 0;
        border-radius: 10px;
        border: 1px solid black;
    }

	#image_container {
        background-image: url("placeholder.webp");
        background-size: cover;
		border: 1px solid black;
		height: 200px;
		border-radius: 10px;
        margin: 0 0 20px 0;
	}

	.container h1 {
		font-style: italic;
        font-size: 1.2em;
        margin-bottom: 10px;
	}

    p {
        font-size: .8em;
    }
</style>
