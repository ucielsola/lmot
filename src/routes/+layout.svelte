<script>
	import '../app.css';

	import { fade } from 'svelte/transition';

	import ImageKit from 'imagekit-javascript';

	import StarsLayer from '$lib/StarsLayer.svelte';
	import Loader from '$lib/loader.svelte';
	import Background from '$lib/Background.svelte';

	let imageURL;
	let innerHeight;
	let innerWidth;
	let loaded = false;

	const imagekit = new ImageKit({
		publicKey: 'public_4fH4SK7wixiXSxgYaDjaaGwjvZE=',
		urlEndpoint: 'https://ik.imagekit.io/ucielsola',
	});

	$: if (innerHeight && innerWidth && !imageURL) {
		imageURL = imagekit.url({
			path: '/lmot/lmot_bg.png',
			transformation: [
				{
					height: innerHeight + 200,
					width: innerWidth,
				},
			],
		});

		if (imageURL) {
			setTimeout(() => (loaded = true), 1000);
		}
	}
</script>

<svelte:window bind:innerHeight bind:innerWidth />

{#if loaded}
	<div class="relative w-screen h-[100dvh] overflow-hidden" in:fade>
		<div class="absolute -z-10">
			<Background {imageURL} />
		</div>

		<div class="w-full h-full overflow-clip" in:fade={{ delay: 300 }}>
			<slot />
		</div>
	</div>
{:else}
	<div class="flex items-center justify-center w-screen h-screen" out:fade>
		<StarsLayer />

		<Loader />
	</div>
{/if}
