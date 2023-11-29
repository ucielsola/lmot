<script>
	import Header from '$lib/components/Header.svelte';
</script>

<div class="flex h-full">
	<div class="flex flex-col items-center justify-center flex-1 gap-10 -mt-24">
		<Header />

		<h3
			class="mx-4 text-6xl leading-none tracking-tighter text-center text-white border-b border-lines"
		>
			SINFONÍA ESTELAR TANGUERA
		</h3>
	</div>

	<div class="flex flex-col items-center justify-center flex-1">
		<h3
			class="mx-4 leading-none tracking-tighter text-center text-white text-7xl whitespace-nowrap"
		>
			Programa Interactivo
		</h3>
		<div class="w-1/2">
			<img src="/images/QR.png" alt="QR" class="w-full h-full shadow-lg" />
		</div>
	</div>
</div>
