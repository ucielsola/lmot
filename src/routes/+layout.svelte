<script>
	import '../app.css';

	import { fade } from 'svelte/transition';

	import ImageKit from 'imagekit-javascript';

	import StarsLayer from '$lib/StarsLayer.svelte';
	import Loader from '$lib/loader.svelte';

	let imageURL;
	let innerHeight;
	let innerWidth;
	let loaded = false;

	const imagekit = new ImageKit({
		publicKey: 'public_4fH4SK7wixiXSxgYaDjaaGwjvZE=',
		urlEndpoint: 'https://ik.imagekit.io/ucielsola',
	});

	$: if (innerHeight && innerWidth) {
		imageURL = imagekit.url({
			path: '/lmot/lmot_bg.png',
			transformation: [
				{
					height: innerHeight + 200,
					width: innerWidth + 200,
				},
			],
		});

		if (imageURL) {
			setTimeout(() => (loaded = true), 1500);
		}
	}
</script>

<svelte:window bind:innerHeight bind:innerWidth />

{#if loaded}
	<div
		class="relative w-screen h-screen overflow-hidden bg-fixed bg-center bg-cover"
		style={`background-image: url('${imageURL}')`}
		in:fade
	>
		<div class="absolute top-0 left-0 z-0 w-screen h-screen">
			<StarsLayer />
		</div>

		<div class="w-full h-full overflow-y-auto" in:fade={{ delay: 300 }}>
			<slot />
		</div>
	</div>
{:else}
	<div class="flex items-center justify-center w-screen h-screen" out:fade>
		<StarsLayer />

		<Loader />
	</div>
{/if}
