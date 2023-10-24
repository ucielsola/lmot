<script>
	import { fade } from "svelte/transition";
	import LineItemConector from "../lib/LineItemConector.svelte";

	let open = null;

	const setOpen = (e) => {
		open = e.target.id;
	};
</script>

<div
	class="relative flex justify-center w-full h-full transition-all duration-300 uciel"
>
	<div
		class="absolute top-0 right-[calc(50% - 0.25rem)] h-full w-[2px] bg-white"
	/>

	<div class="flex flex-col gap-4 py-4">
		{#each Array(5) as _, i}
			<div in:fade={{ delay: 110 * (i + 1), duration: 150 }}>
				<LineItemConector right={i % 2 !== 0} />
			</div>
		{/each}
	</div>
</div>
