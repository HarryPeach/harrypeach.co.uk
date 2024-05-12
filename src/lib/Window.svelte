<div class="window">
	<div class="titlebar">
		<div class="title">Homepage</div>
		<div class="buttons">
			<div class="button" />
			<div class="button" />
			<div class="button" />
		</div>
	</div>
	<div class="content">
		<p>This is an example of my EPIC website. This is a windows 98-esque window!</p>
	</div>
</div>

<style>
	.window {
        display: flex;
        flex-direction: column;
		width: 300px;
		height: 100px;
        padding: 2px;
		background: #a5a5a5;
		border-top: solid 1px #cccccc;
		border-left: solid 1px #cccccc;
		border-bottom: solid 1px #888888;
		border-right: solid 1px #888888;
	}

    .content {
        margin-top: 2px;
        background: white;
        padding: 8px;
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

	.button {
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
