<script>
	import { clickOutside } from './clickOutside.js';
	import { fade } from 'svelte/transition';
	import { dataStore } from './dataStore';

	const handleClose = () => {
		if (!$dataStore.selected) return;
		
		dataStore.update((state) => ({
			...state,
			selected: undefined,
		}));
	};
</script>

{#if $dataStore.selected}
	<div class="absolute top-0 left-0 flex items-center justify-center w-screen h-screen px-4">
		<div
			class="absolute z-10 w-full h-full transition duration-300 border rounded-md bg-modal-backdrop bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-sm"
			in:fade={{ delay: 0 }}
			out:fade={{ delay: 150 }}
		/>

		<div
			class="relative z-20 p-2.5 border rounded-md h-min border-{$dataStore.selected
				.color} bg-modal-bg bg-opacity-40 text-lines"
			use:clickOutside={{
				stopPropagation: true,
				handler: () => handleClose(),
			}}
			in:fade={{ delay: 150 }}
			out:fade={{ delay: 0 }}
		>
			<h1 class="text-4xl pb-4 font-medium text-center text-{$dataStore.selected.color}">
				{$dataStore.selected.label}
			</h1>

			<p class="text-sm text-lines">
				{$dataStore.selected.text}
			</p>
		</div>
	</div>
{/if}
