<script>
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { T, useTask, useLoader } from '@threlte/core';
	import { interactivity } from '@threlte/extras';

	const gltf = useLoader(GLTFLoader).load('/assets/peach.glb');

	let rotation = 0;
	useTask((delta) => {
		rotation += delta * 0.48;
	});
</script>

<div class="container">
	<T.PerspectiveCamera
		makeDefault
		position={[10, 10, 10]}
		oncreate={(ref) => {
			ref.lookAt(0, 1, 0);
		}}
	/>
	<T.AmbientLight intensity={5} />

	<T.Mesh rotation.y={rotation} position.y={1} scale={4} rotation.x={-0.2} rotation.z={0.2}>
		{#if $gltf}
			<T is={$gltf.scene} />
		{/if}
	</T.Mesh>
</div>

<style>
	.container {
		height: 100vh;
		width: 100vw;
	}
</style>
