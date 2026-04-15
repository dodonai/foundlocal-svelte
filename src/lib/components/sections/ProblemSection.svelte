<script>
	import { X } from 'lucide-svelte';
	import SectionLabel from '$lib/components/ui/SectionLabel.svelte';
	import problems from '$lib/data/problems.json';
</script>

<section id="problem" class="bg-gray-50 py-20">
	<div class="container mx-auto px-4 max-w-5xl">
		<div class="text-center mb-12">
			<SectionLabel>The Problem</SectionLabel>
			<h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 text-balance mb-4">
				You're great at what you do. But invisible online.
			</h2>
			<p class="text-gray-500 text-lg max-w-2xl mx-auto text-pretty">
				Your competitors may simply look clearer online. Here's why yours may not.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-5 mb-5">
			{#each problems as card (card.title)}
				<div class="border border-gray-200 rounded-xl shadow-sm bg-white">
					<div class="p-6">
						<div class="flex items-start gap-3 mb-3">
							<X class="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
							<h3 class="font-bold text-gray-900 text-base leading-snug">{card.title}</h3>
						</div>
						<p class="text-gray-500 text-sm leading-relaxed">{card.body}</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- Yelp / Angi card -->
		<div class="border-l-4 border-amber-400 bg-amber-50 rounded-xl p-6">
			<h3 class="font-bold text-gray-900 text-base mb-2 leading-snug">
				Many local businesses spend $800 to $1,500/mo on directories and still do not fix the
				core problem: their own site is unclear.
			</h3>
			<p class="text-gray-600 text-sm leading-relaxed">
				Paid directories do not fix a confusing website. Google, Maps, and newer search results
				still look at your broader online presence, not just one listing.
			</p>
		</div>
	</div>
</section>
