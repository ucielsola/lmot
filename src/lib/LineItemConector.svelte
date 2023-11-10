<script lang="ts">
	import { fade, fly } from "svelte/transition";

	export let right = false;
</script>

<div class="relative h-min">
	<div class="absolute left-1/2 h-full w-[1px] bg-white" />
	<div id="top-half" class="flex">
		{#if right}
			<div class="w-[60px] h-[60px]" />

			<div
				class="h-[60px] w-[60px] border border-b-0 border-white rounded-tr-full"
			/>
		{:else}
			<div
				class="h-[60px] w-[60px] border border-b-0 border-r-0 border-white rounded-tl-full"
			/>

			<div class="w-[60px] h-[60px]" />
		{/if}
	</div>

	<div id="bottom-half" class="flex">
		<div class="w-[60px] h-[60px]" />

		<div class="w-[60px] h-[60px]" />
	</div>

	<div
		id="hor-line"
		class="absolute top-[50%] w-3/4 h-[1px] bg-white"
		class:left-[50%]={right}
		class:right-[50%]={!right}
	/>

	<div id="circles" class="absolute top-[19%] right-[19%]">
		<div
			class="flex items-center justify-center border border-white rounded-full w-[4.5rem] h-[4.5rem]"
			in:fade={{ delay: 100 }}
		>
			<div
				class="flex items-center justify-center w-[3rem] h-[3rem] border border-white rounded-full"
				in:fade={{ delay: 140 }}
			>
				<div
					class="flex items-center justify-center w-[2rem] h-[2rem] border border-white rounded-full"
					in:fade={{ delay: 180 }}
				>
					<div
						class="w-[1rem] h-[1rem] bg-white rounded-full"
						in:fade={{ delay: 220 }}
					/>
				</div>
			</div>
		</div>
	</div>
</div>
