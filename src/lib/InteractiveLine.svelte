<script>
	import LineItemLeft from './LineItemLeft.svelte';
	import LineItemRight from './LineItemRight.svelte';

	import { dataStore } from '$lib/dataStore';
</script>

{#each $dataStore.data as { label, color }, i}
	{@const isLast = i === $dataStore.data.length - 1}

	{#if i % 2 !== 0}
		<LineItemRight {label} {color} {isLast} />
	{:else}
		<LineItemLeft {label} {color} {isLast} />
	{/if}
{/each}
