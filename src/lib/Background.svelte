<script>
	import StarsLayer from '$lib/StarsLayer.svelte';

	export let imageURL;
</script>

<div class="relative w-full h-full">
	<img src={imageURL} alt="" class="relative z-0 w-full h-full" />

	<div class="absolute top-0 left-0 z-10 w-full h-full">
		<StarsLayer />
	</div>
</div>

<style>
	img {
		animation: zoomIn 40s linear;
	}

	@keyframes zoomIn {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.5);
		}
	}
</style>
