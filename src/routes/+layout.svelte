<script>
	import "../app.css";
	import "@twicpics/components/style.css";

	import { installTwicpics } from "@twicpics/components/sveltekit";

	installTwicpics({
		domain: "https://ucielsola.twic.pics",
	});

	import { browser } from "$app/environment";

	import StarsBackground from "$lib/StarsBackground.svelte";

	let loaded = false;

	$: if (browser) {
		setTimeout(() => {
			loaded = true;
		}, 2000);
	}
</script>

<div class="relative w-screen h-screen overflow-hidden">
	<div class="absolute top-0 left-0 -z-10">
		<StarsBackground />
	</div>

	{#if loaded}
		<div class="w-full h-full">
			<slot />
		</div>
	{/if}
</div>
