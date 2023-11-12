<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import InteractiveLine from '$lib/InteractiveLine.svelte';
	import { fade } from 'svelte/transition';

	let headerHeight;
	let footerHeight;
</script>

<div bind:clientHeight={headerHeight}>
	<Header />

	<h3
		class="mx-4 text-xl leading-none tracking-tighter text-center text-white border-b text-lines border-lines"
	>
		SINFONÍA ESTELAR TANGUERA
	</h3>
</div>

<div
	class="flex flex-col items-center w-full pb-8 overflow-y-auto"
	in:fade={{ delay: 500 }}
	style={`height: calc(100vh - ${headerHeight}px - ${footerHeight}px);`}
>
	<InteractiveLine {headerHeight} />
</div>

<div bind:clientHeight={footerHeight}>
	<Footer />
</div>
