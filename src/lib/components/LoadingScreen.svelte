<script>
	import { fade } from 'svelte/transition';

	import StarsLayer from '$lib/components/StarsLayer.svelte';
	import Loader from '$lib/components/loader.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="relative flex flex-col justify-center w-screen h-screen gap-10">
	<div class="absolute -z-10">
		<StarsLayer />
	</div>

	<header class="h-1/2">
		<Header />

		<h3
			class="mx-4 text-xl leading-none tracking-tighter text-center text-white border-b text-lines border-lines"
		>
			SINFONÍA ESTELAR TANGUERA
		</h3>
	</header>

	<div class="flex justify-center w-full h-1/2" out:fade>
		<Loader />
	</div>
</div>
