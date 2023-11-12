<script lang="ts">
	import { fade } from 'svelte/transition';

	export let right = false;
	export let label = '';
</script>

<div class="flex items-center">
	<span class="text-xs" class:opacity-0={right}>
		{label}
	</span>

	<svg viewBox="0 0 76 50" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-14">
		<path d="M27 29V29C27 13.536 39.536 1 55 1V1" stroke-width="0.5" class="stroke-lines" />

		<circle cx="55" cy="29" r="3" fill="#ABEBBD" stroke="#ABEBBD" stroke-width="0.5" />
		<circle cx="55" cy="29" r="20" stroke="#ABEBBD" stroke-width="0.5" />
		<circle cx="55" cy="29" r="6" stroke="#ABEBBD" stroke-width="0.5" />
		<circle cx="55" cy="29" r="10" stroke="#ABEBBD" stroke-width="0.5" />

		<path
			d="M3.3333 29.0991C3.3333 28.3627 2.73635 27.7658 1.99997 27.7658C1.26359 27.7658 0.666635 28.3627 0.666635 29.0991C0.666635 29.8355 1.26359 30.4325 1.99997 30.4325C2.73635 30.4325 3.3333 29.8355 3.3333 29.0991ZM1.99997 29.3491L54.0894 29.3491L54.0894 28.8491L1.99997 28.8491L1.99997 29.3491Z"
			fill="#ABEBBD"
		/>
	</svg>

	<span class="text-xs" class:opacity-0={!right}>
		{label}
	</span>
</div>
