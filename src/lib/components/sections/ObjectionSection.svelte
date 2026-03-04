<script>
	import SectionLabel from '$lib/components/ui/SectionLabel.svelte';
	import objections from '$lib/data/objections.json';
</script>

<section class="bg-white py-20">
	<div class="container mx-auto px-4 max-w-3xl">
		<div class="text-center mb-12">
			<SectionLabel>Straight answers</SectionLabel>
			<h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 text-balance">
				Honest answers to your real questions.
			</h2>
		</div>

		<div class="grid md:grid-cols-2 gap-6">
			{#each objections as card (card.title)}
				<div class="bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
					<div class="p-6">
						<h3 class="font-bold text-gray-900 text-base mb-3">{card.title}</h3>
						<p class="text-gray-500 text-sm leading-relaxed">{card.body}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
