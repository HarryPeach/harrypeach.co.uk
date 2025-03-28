<div class="marquee">
	<div>
		<span>// You spin me right round, baby. Like a record, baby. //</span>
		<span>// I spin me right round, baby. Like a record, baby. //</span>
	</div>
</div>

<style>
	.marquee {
		font-size: 1.2em;
		height: 30px;
		width: 100%;

		background: var(--primary-colour);
		border: 2px solid black;

		overflow: hidden;
		position: relative;
	}

	.marquee div {
		display: block;
		width: 200%;
		height: 30px;

		position: absolute;
		overflow: hidden;

		animation: marquee 15s linear infinite;
	}

	.marquee span {
		float: left;
		width: 50%;
	}

	@keyframes marquee {
		0% {
			left: 0;
		}
		100% {
			left: -100%;
		}
	}
</style>
