<script>
	import SectionLabel from '$lib/components/ui/SectionLabel.svelte';
	import testimonials from '$lib/data/testimonials.json';
</script>

<section class="bg-gray-100 py-20">
	<div class="container mx-auto px-4 max-w-5xl">
		<div class="text-center mb-12">
			<SectionLabel>Best Fits</SectionLabel>
			<h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 text-balance">
				Businesses that usually benefit first.
			</h2>
		</div>

		<div class="grid md:grid-cols-3 gap-6">
			{#each testimonials as t (t.name)}
				<div class="bg-white border border-gray-200 rounded-xl shadow-sm">
					<div class="p-6 flex flex-col h-full">
						<p class="text-gray-600 text-sm leading-relaxed flex-1 mb-5">{t.quote}</p>
						<div>
							<p class="font-bold text-gray-900 text-sm">{t.name}</p>
							<p class="text-gray-400 text-xs">{t.business}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<p class="text-center text-xs text-gray-400 mt-6">
			These are representative scenarios, not direct customer testimonials.
		</p>
	</div>
</section>
