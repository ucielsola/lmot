<script>
	let open = null;

	const setOpen = (e) => {
		open = e.target.id;
	};
</script>

<div
	class="flex w-full h-full justify-end transition-all duration-300"
	class:w-[50%]={!open}
	class:w-full={open && open % 2 === 0}
	class:w-16={open && open % 2 === 1}
>
	<div class="le flex flex-col gap-8">
		<div id="1" class="w-16 h-16 bg-white rounded-full" on:click={setOpen} />
		<div id="3" class="w-16 h-16 bg-white rounded-full" on:click={setOpen} />
		<div id="5" class="w-16 h-16 bg-white rounded-full" on:click={setOpen} />
	</div>

	<div class="w-2 h-full bg-white" />

	<div class="le flex flex-col gap-8">
		<div id="2" class="w-16 h-16 bg-white rounded-full" on:click={setOpen} />
		<div id="4" class="w-16 h-16 bg-white rounded-full" on:click={setOpen} />
		<div id="5" class="w-16 h-16 bg-white rounded-full" on:click={setOpen} />
	</div>
</div>
