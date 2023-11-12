<script lang="ts">
	export let label = '';
	export let color = '';
	export let isLast = false;
</script>

<div class="relative py-4">
	<div id="ver-line" class="absolute z-0 w-[1px] bg-[#D9D9D9] h-full left-1/2" />

	<div class="relative z-10 flex items-center justify-center right-[3.9rem]">
		<div class="flex items-center justify-end pt-2 -mr-2">
			<span
				class="block w-[5rem] p-1 text-xs text-center border rounded-md"
				style="border-color: {`#${color}`}; color: #{color}"
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
			<path d="M27 29V29C27 13.536 39.536 1 55 1V1" stroke="#fff" stroke-width="0.5" />

			<circle
				cx="55"
				cy="29"
				r="3"
				fill={`#${color}`}
				stroke={`#${color}`}
				stroke-width="0.5"
			/>
			<circle cx="55" cy="29" r="20" stroke={`#${color}`} stroke-width="0.5" />
			<circle cx="55" cy="29" r="6" stroke={`#${color}`} stroke-width="0.5" />
			<circle cx="55" cy="29" r="10" stroke={`#${color}`} stroke-width="0.5" />

			<path
				d="M3.3333 29.0991C3.3333 28.3627 2.73635 27.7658 1.99997 27.7658C1.26359 27.7658 0.666635 28.3627 0.666635 29.0991C0.666635 29.8355 1.26359 30.4325 1.99997 30.4325C2.73635 30.4325 3.3333 29.8355 3.3333 29.0991ZM1.99997 29.3491L54.0894 29.3491L54.0894 28.8491L1.99997 28.8491L1.99997 29.3491Z"
				fill={`#${color}`}
				class="shadow-lg"
			/>
		</svg>
	</div>

	{#if isLast}
		<div
			id="ver-line"
			class="absolute z-0 w-[3px] bg-[#D9D9D9] h-[3px] rounded-full left-[49.5%]"
		/>
	{/if}
</div>
