<script>
	import '../app.css';

	import { fade } from 'svelte/transition';

	import ImageKit from 'imagekit-javascript';

	import StarsLayer from '$lib/StarsLayer.svelte';
	import Loader from '$lib/loader.svelte';
	import Background from '$lib/Background.svelte';
	import Modal from '../lib/Modal.svelte';
	import LoadingScreen from '../lib/LoadingScreen.svelte';

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
			path: '/lmot/lmot_bg.webp',
			transformation: [
				{
					height: innerHeight * 1.7,
					width: innerWidth * 1.7,
				},
			],
		});

		if (imageURL) {
			setTimeout(() => (loaded = true), 800);
		}
	}
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<Modal />

{#if loaded}
	<div class="relative w-screen h-[100dvh] overflow-hidden">
		<div class="absolute -z-10" in:fade>
			<Background {imageURL} />
		</div>

		<div class="relative z-0 w-full h-full overflow-scroll">
			<slot />
		</div>
	</div>
{:else}
	<LoadingScreen />
{/if}
