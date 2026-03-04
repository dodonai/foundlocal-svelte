<script>
	let { children } = $props();
</script>

<p class="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-3">
	{@render children()}
</p>
