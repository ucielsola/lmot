<script>
	import { fade } from 'svelte/transition';

	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import LineItemLeft from '$lib/LineItemLeft.svelte';
	import LineItemRight from '$lib/LineItemRight.svelte';

	import { dataStore } from '$lib/dataStore';

	let headerHeight;
	let footerHeight;
	let footerOpen;
</script>

<div relativ>
	<div bind:clientHeight={headerHeight}>
		<Header />

		<h3
			class="mx-4 text-xl leading-none tracking-tighter text-center text-white border-b text-lines border-lines"
		>
			SINFONÍA ESTELAR TANGUERA
		</h3>
	</div>

	<div
		class="z-0 flex flex-col items-center w-full pb-20 overflow-x-hidden overflow-y-auto"
		in:fade={{ delay: 500 }}
		style={`height: calc(100dvh - ${headerHeight}px - ${footerOpen ? footerHeight : 0}px);`}
	>
		{#each $dataStore.data as { label, color }, i}
			{@const isLast = i === $dataStore.data.length - 1}

			{#if i % 2 !== 0}
				<LineItemRight {label} {color} {isLast} isFirst={i === 0} />
			{:else}
				<LineItemLeft {label} {color} {isLast} isFirst={i === 0} />
			{/if}
		{/each}
	</div>

	<div class="z-10" bind:clientHeight={footerHeight}>
		<Footer bind:open={footerOpen} />
	</div>
</div>
