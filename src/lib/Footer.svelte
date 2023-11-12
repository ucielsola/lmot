<script>
	import { clickOutside } from '$lib/clickOutside.js';
	let open = false;
	let active = 1;

	let tabs = [
		{
			label: 'La Orquesta',
		},
		{
			label: 'El Show',
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

<div class="relative min-h-[2.5rem]">
	<div class={`absolute z-10 h-10 pl-2 flex items-end ${open ? 'top-[-2.5rem]' : 'top-0'}`}>
		{#each tabs as tab, i}
			<button
				class={`relative px-5 text-sm rounded-t-lg text-lines transition-[height] border duration-150
			 ${
					active === i + 1
						? 'bg-pigment h-10 -mb-[1px] z-10 border-lines !border-b-transparent'
						: 'bg-pigment/90 h-[2.1rem] !border-transparent'
				}
			 ${i > 0 && '-ml-2'}
			 `}
				on:click|stopPropagation={() => setActiveTab(i)}
			>
				{tab.label}
			</button>
		{/each}
	</div>

	<div
		class="relative w-full transition-[height] duration-300 ease-out border-t border-t-lines"
		class:h-0={!open}
		class:h-[65vh]={open}
		class:!border-0={!open}
		use:clickOutside={() => toggleOpen(false)}
	>
		<div class="h-full bg-pigment" />
	</div>
</div>
