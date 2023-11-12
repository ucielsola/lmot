<script lang="ts">
	export let label = '';
	export let color = '';
	export let isLast = false;
	export let isFirst = false;
</script>

<div class="relative py-4" class:!pt-8={isFirst}>
	{#if isFirst}
		<div id="ver-line-1" class="absolute z-0 w-[1px] bg-lines h-[2rem] left-1/2 top-0" />
	{/if}

	<div id="ver-line-2" class="absolute z-0 w-[1px] h-full bg-lines left-1/2" />

	<div class="relative z-10 flex items-center justify-center right-[59px]">
		<div class="relative flex items-center justify-end pt-2 mt-1 left-[10px]">
			<span
				class="block w-[6rem] p-1 text-xs text-center border border-{color} text-{color} rounded-md"
			>
				{label}
			</span>
		</div>

		<svg
			viewBox="0 0 76 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="py-1.5 w-[7rem]"
		>
			<path
				d="M18 29.0992V29.0992C18 13.5804 30.593 1 46.1118 1V1"
				class="stroke-lines"
				stroke-width="0.5"
			/>
			<circle cx="46" cy="29" r="3" class="stroke-{color} fill-{color}" stroke-width="0.5" />
			<circle cx="46" cy="29" r="20" class="stroke-{color}" stroke-width="0.5" />
			<circle cx="46" cy="29" r="6" class="stroke-{color}" stroke-width="0.5" />
			<circle cx="46" cy="29" r="10" class="stroke-{color}" stroke-width="0.5" />
			<path
				d="M3.33333 29.0073C3.33495 28.2709 2.73931 27.6727 2.00293 27.6711C1.26655 27.6694 0.668288 28.2651 0.666669 29.0015C0.66505 29.7378 1.26069 30.3361 1.99707 30.3377C2.73345 30.3393 3.33171 29.7437 3.33333 29.0073ZM1.99945 29.2544L45.0888 29.3491L45.0899 28.8491L2.00055 28.7544L1.99945 29.2544Z"
				fill={`#${color}`}
				class="fill-{color}"
			/>
		</svg>
	</div>

	{#if isLast}
		<div
			id="ver-line"
			class="absolute z-0 w-[3px] bg-lines h-[3px] rounded-full left-[49.5%] -bottom-4"
		/>
	{/if}
</div>
