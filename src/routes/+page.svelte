<script>
	import { fade } from "svelte/transition";
	import LineItemConector from "$lib/LineItemConector.svelte";
</script>

<div class="flex justify-center w-full h-full">
	<div class="relative flex flex-col h-full py-4">
		{#each Array(8) as _, i}
			<div in:fade|global={{ delay: 100 * i, duration: 500 }}>
				<LineItemConector right={i % 2 !== 0} />
			</div>
		{/each}
	</div>
</div>
ƒ