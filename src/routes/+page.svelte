<script>
	import Header from '$lib/Header.svelte';
	import InteractiveLine from '$lib/InteractiveLine.svelte';

	let headerHeight;
</script>

<div bind:clientHeight={headerHeight}>
	<div>
		<Header />
	</div>

	<div>
		<h3
			class="mx-4 text-xl leading-none tracking-tighter text-center text-white border-b border-white"
		>
			SINFONÍA ESTELAR TANGUERA
		</h3>
	</div>
</div>

<InteractiveLine {headerHeight} />
