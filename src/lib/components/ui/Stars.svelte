<script>
	import { Star } from 'lucide-svelte';
</script>

<div class="flex gap-0.5 mb-3">
	{#each Array(5) as _, i (i)}
		<Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />
	{/each}
</div>
