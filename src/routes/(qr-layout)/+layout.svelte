<script>
	import '$appCss';

	import { fade } from 'svelte/transition';

	import ImageKit from 'imagekit-javascript';

	import Background from '$lib/components/Background.svelte';

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

	$: console.log('qr layout');
</script>

<svelte:window bind:innerHeight bind:innerWidth />

{#if loaded}
	<div class="relative w-screen h-screen overflow-hidden">
		<div class="absolute -z-10" in:fade>
			<Background {imageURL} />
		</div>

		<div class="relative z-0 w-full h-full">
			<slot />
		</div>
	</div>
{/if}
