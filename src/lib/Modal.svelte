<script>
	import { clickOutside } from '$lib/clickOutside.js';
	import { fade } from 'svelte/transition';
	import { dataStore } from '$lib/dataStore';

	const handleClose = () => {
		dataStore.update((state) => ({
			...state,
			selected: null,
		}));
	};
</script>

{#if $dataStore.selected}
	<div
		class="absolute top-0 left-0 flex items-center justify-center w-screen h-screen px-8"
		transition:fade={{ duration: 300 }}
	>
		<div
			class="absolute z-10 w-full h-full transition-all duration-300 bg-gray-400 bg-opacity-50 border rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm"
		/>

		<div
			class="relative z-20 flex-1 text-3xl border h-min border-lines bg-[#000] bg-opacity-40 text-lines rounded-md p-0.5"
			use:clickOutside={$dataStore.selected ? handleClose : null}
		>
			<h1 class="text-2xl font-bold text-center text-{$dataStore.selected.color}">
				{$dataStore.selected.label}
			</h1>

			<p class="text-sm font-bold text-center text-lines">
				{$dataStore.selected.text}
			</p>
		</div>
	</div>
{/if}
