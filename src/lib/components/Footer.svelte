<script>
	import { clickOutside } from '$lib/actions/clickOutside.js';
	import { dragNode } from '$lib/actions/dragNode.js';

	import OrquestaTab from '$lib/components/OrquestaTab.svelte';
	import ShowTab from '$lib/components/ShowTab.svelte';
	import { dataStore } from '$lib/data/dataStore';

	let open = false;
	let isDragging = false;
	let active = 1;
	let footerH;
	let windowH;
	let dragTimout;

	// $: console.log({ open, isDragging });

	$: if ($dataStore.selected) {
		open = false;
	}

	let tabs = [
		{
			label: 'La Orquesta',
			component: OrquestaTab,
		},
		{
			label: 'El Show',
			component: ShowTab,
		},
	];

	const setActiveTab = (e, index) => {
		active = index + 1;
		isDragging = false;
		toggleOpen(true);
	};

	const toggleOpen = (newState) => {
		open = newState;
	};

	const handleTouchStart = (e) => {
		dragTimout = setTimeout(() => {
			isDragging = true;
			open = true;
		}, 200);
	};

	const handleTouchEnd = (e) => {
		clearTimeout(dragTimout);
		isDragging = false;
	};

	const dragToClose = () => {
		console.log('dragToClose');
		isDragging = false;
		open = false;
	};
</script>

<svelte:window bind:innerWidth={windowH} />

<div
	class="absolute bottom-auto w-full transition-all duration-300 ease-out bg-footer"
	style={`transform: ${
		!open && !isDragging
			? 'translateY(0)'
			: open && !isDragging
			  ? `translateY(${footerH * -1}px)`
			  : ''
	};`}
	use:dragNode={() => dragToClose()}
	on:touchstart={handleTouchStart}
	on:touchend={handleTouchEnd}
	bind:clientHeight={footerH}
>
	<div class={`absolute z-10 h-10 pl-2 flex items-end`}>
		{#each tabs as tab, i}
			<button
				class={`relative px-5 text-sm h-[34px] rounded-t-lg text-lines -top-10 border transition-[height] duration-300 ease-out bg-footer
			 	${
					active === i + 1
						? 'bg-pigment !h-10 -mb-[1px] z-10 border-lines !border-b-0 !border-b-transparent'
						: 'bg-pigment/90 h-[2.1rem] !border-transparent'
				}
			 	${i > 0 && '-ml-2'}
			 `}
				on:click|stopPropagation={(e) => setActiveTab(e, i)}
			>
				{tab.label}
			</button>
		{/each}
	</div>

	<div
		id="footer"
		class="w-full overflow-hidden transition-all duration-300 ease-out border-t bg-pigment border-t-lines min-h-[40dvh]"
		class:!border-0={!open}
		use:clickOutside={{
			stopPropagation: open,
			handler: () => toggleOpen(false),
		}}
	>
		<svelte:component this={tabs[active - 1].component} />
	</div>
</div>
