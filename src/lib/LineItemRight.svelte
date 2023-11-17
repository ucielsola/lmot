<script lang="ts">
	export let id: number;
	export let isLast = false;
	export let isFirst = false;

	import { dataStore } from './dataStore';

	$: item = $dataStore.data.find((item) => item.id === id);

	let innerWidth;
	let innerCircle;

	let distanceToCenter = 0;

	$: if (innerWidth && innerCircle && !distanceToCenter) {
		distanceToCenter = innerWidth / 2 - innerCircle.getBoundingClientRect().x - 2;
	}

	const handleClick = () => {
		dataStore.update((state) => ({
			...state,
			selected: item,
		}));
	};
</script>

<svelte:window bind:innerWidth />

<button class="relative py-4" class:!pt-8={isFirst} on:click|stopPropagation={handleClick}>
	{#if isFirst}
		<div id="ver-line-1" class="absolute z-0 w-[1px] bg-lines h-[2rem] left-1/2 top-0" />
	{/if}

	<div id="ver-line" class="absolute z-0 w-[1px] bg-lines h-full left-1/2" />

	<div
		class="relative z-10 flex items-center justify-center left-[3.9rem]"
		style={`transform: translateX(${distanceToCenter}px);`}
	>
		<svg
			viewBox="0 0 76 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="py-1.5 w-[6rem]"
		>
			<path
				d="M49 21V21C49 36.464 36.464 49 21 49V49"
				class="stroke-lines"
				stroke-width="0.5"
			/>

			<circle
				cx="21"
				cy="21"
				r="3"
				transform="rotate(180 21 21)"
				class="stroke-{item.color} fill-{item.color}"
				stroke-width="0.5"
				bind:this={innerCircle}
			/>
			<circle
				cx="21"
				cy="21"
				r="20"
				transform="rotate(180 21 21)"
				class="stroke-{item.color}"
				stroke-width="0.5"
			/>
			<circle
				cx="21"
				cy="21"
				r="6"
				transform="rotate(180 21 21)"
				class="stroke-{item.color}"
				stroke-width="0.5"
			/>
			<circle
				cx="21"
				cy="21"
				r="10"
				transform="rotate(180 21 21)"
				class="stroke-{item.color}"
				stroke-width="0.5"
			/>
			<path
				d="M63.6667 20.9948C63.665 21.7311 64.2606 22.3294 64.997 22.3311C65.7334 22.3327 66.3317 21.7371 66.3333 21.0008C66.335 20.2644 65.7394 19.6661 65.003 19.6644C64.2666 19.6628 63.6683 20.2584 63.6667 20.9948ZM65.0006 20.7478L21.9112 20.6509L21.9101 21.1509L64.9994 21.2478L65.0006 20.7478Z"
				class="fill-{item.color}"
			/>
		</svg>

		<div class="pb-2 -mt-1 -ml-5">
			<span
				class="block min-w-[6rem] text-center p-1 px-2 text-lg border border-{item.color} text-{item.color} rounded-md"
			>
				{item.label}
			</span>
		</div>
	</div>

	{#if isLast}
		<div
			id="ver-line"
			class="absolute z-0 w-[3px] bg-lines h-[3px] rounded-full left-[49.5%] -bottom-4"
		/>
	{/if}
</button>
