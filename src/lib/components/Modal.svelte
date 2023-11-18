<script>
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import { clickOutside } from '$lib/actions/clickOutside.js';
	import { dataStore } from '$lib/data/dataStore.js';

	let navigateTimeout;

	$: if ($page?.url?.hash === '') {
		navigateTimeout = setTimeout(() => {
			handleClose();
		}, 100);
	}

	const handleClose = () => {
		if (!$dataStore.selected) return;

		dataStore.update((state) => ({
			...state,
			selected: undefined,
		}));

		goto('./');

		clearTimeout(navigateTimeout);
	};
</script>

{#if $dataStore.selected}
	<div class="absolute top-0 left-0 flex items-center justify-center w-screen h-screen px-4">
		<div
			class="absolute z-10 w-full h-full transition duration-300 border rounded-md bg-modal-backdrop bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-sm"
			in:fade={{ delay: 0 }}
			out:fade={{ delay: 150 }}
		/>

		<button
			on:click={handleClose}
			class="absolute z-20 top-4 right-4 focus:outline-none"
			in:fade={{ delay: 150 }}
			out:fade={{ delay: 0 }}
		>
			<span class="sr-only">Close</span>
			<svg
				class="w-6 h-6 text-lines"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>

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
