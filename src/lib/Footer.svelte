<script>
	import { clickOutside } from '$lib/clickOutside.js';

	import OrquestaTab from './OrquestaTab.svelte';
	import ShowTab from './ShowTab.svelte';

	export let open = false;
	let active = 1;

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

	const setActiveTab = (index) => {
		active = index + 1;
		toggleOpen(true);
	};

	const toggleOpen = (newState) => {
		open = newState;
	};
</script>

<div id="footer" class="relative" class:translate-y-0={open} class:translate-y-[0.5rem]={!open}>
	<div class={`absolute z-10 h-10 pl-2 flex items-end ${open ? 'top-[-2.5rem]' : 'top-[-3rem]'}`}>
		{#each tabs as tab, i}
			<button
				class={`relative px-5 text-sm rounded-t-lg text-lines transition-[height] border duration-150
			 ${
					active === i + 1
						? 'bg-pigment h-10 -mb-[2px] z-10 border-lines !border-b-transparent'
						: 'bg-pigment/90 h-[2.1rem] !border-transparent'
				}
				${!open && 'pb-2.5'}
			 ${i > 0 && '-ml-2'}
			 `}
				on:click|stopPropagation={() => setActiveTab(i)}
			>
				{tab.label}
			</button>
		{/each}
	</div>

	<div
		class="w-full overflow-hidden transition-all duration-300 ease-out border-t bg-pigment border-t-lines"
		class:!border-0={!open}
		class:h-0={!open}
		class:h-[65dvh]={open}
		use:clickOutside={() => toggleOpen(false)}
	>
		<svelte:component this={tabs[active - 1].component} />
	</div>
</div>
