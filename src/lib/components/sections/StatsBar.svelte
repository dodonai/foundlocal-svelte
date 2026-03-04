<script>
	import stats from '$lib/data/stats.json';
</script>

<section class="bg-gray-800 text-white border-b border-gray-700">
	<div class="container mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
		{#each stats as stat (stat.value)}
			<div>
				<p class="text-3xl font-extrabold text-indigo-400">{stat.value}</p>
				<p class="text-xs text-gray-400 mt-1 leading-relaxed">{stat.label}</p>
			</div>
		{/each}
	</div>
</section>
