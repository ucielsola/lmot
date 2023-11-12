<script lang="ts">
	export let label = '';
	export let color = '';
	export let isLast = false;
</script>

<div class="relative py-4">
	<div id="ver-line" class="absolute z-0 w-[1px] bg-[#D9D9D9] h-full left-1/2" />

	<div class="relative z-10 flex items-center justify-center left-[3.9rem]">
		<svg
			viewBox="0 0 76 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="py-1.5 w-[7rem]"
		>
			<path d="M49 21V21C49 36.464 36.464 49 21 49V49" stroke="#fff" stroke-width="0.5" />

			<circle
				cx="21"
				cy="21"
				r="3"
				transform="rotate(180 21 21)"
				fill={`#${color}`}
				stroke={`#${color}`}
				stroke-width="0.5"
			/>
			<circle
				cx="21"
				cy="21"
				r="20"
				transform="rotate(180 21 21)"
				stroke={`#${color}`}
				stroke-width="0.5"
			/>
			<circle
				cx="21"
				cy="21"
				r="6"
				transform="rotate(180 21 21)"
				stroke={`#${color}`}
				stroke-width="0.5"
			/>
			<circle
				cx="21"
				cy="21"
				r="10"
				transform="rotate(180 21 21)"
				stroke={`#${color}`}
				stroke-width="0.5"
			/>
			<path
				d="M72.6667 20.9008C72.6667 21.6372 73.2636 22.2342 74 22.2342C74.7364 22.2342 75.3333 21.6372 75.3333 20.9008C75.3333 20.1644 74.7364 19.5675 74 19.5675C73.2636 19.5675 72.6667 20.1644 72.6667 20.9008ZM74 20.6508L21.9106 20.6508L21.9106 21.1508L74 21.1508L74 20.6508Z"
				fill={`#${color}`}
			/>
		</svg>

		<div class="pb-2 -ml-2">
			<span
				class="block w-[5rem] p-1 text-xs text-center border rounded-md"
				style="border-color: {`#${color}`}; color: #{color}"
			>
				{label}
			</span>
		</div>
	</div>

	{#if isLast}
		<div
			id="ver-line"
			class="absolute z-0 w-[3px] bg-[#D9D9D9] h-[3px] rounded-full left-[49.5%]"
		/>
	{/if}
</div>
