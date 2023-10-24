<script>
	import "../app.css";
	import StarsBackground from "$lib/StarsBackground.svelte";
</script>

<div class="relative h-screen w-screen overflow-hidden">
	<div class="absolute top-0 left-0 -z-10">
		<StarsBackground />
	</div>

	<div class="h-full w-full">
		<slot />
	</div>
</div>
