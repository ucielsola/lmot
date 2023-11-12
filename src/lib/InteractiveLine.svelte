<script>
	import { fade } from 'svelte/transition';

	import LineItemLeft from './LineItemLeft.svelte';
	import LineItemRight from './LineItemRight.svelte';

	export let headerHeight;

	import { dataStore } from '$lib/dataStore';
</script>

<div
	class="flex flex-col items-center w-full overflow-y-auto"
	in:fade={{ delay: 500 }}
	style={`height: calc(100vh - ${headerHeight}px);`}
>
	{#each $dataStore.data as { label, color }, i}
		{@const isLast = i === $dataStore.data.length - 1}

		{#if i % 2 !== 0}
			<LineItemRight {label} {color} {isLast} />
		{:else}
			<LineItemLeft {label} {color} {isLast} />
		{/if}
	{/each}

	<div>Hola</div>
</div>
