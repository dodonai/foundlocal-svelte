<script>
	import { Play } from 'lucide-svelte';
	import SectionLabel from '$lib/components/ui/SectionLabel.svelte';

	const tags = ['Clear script', 'Natural voiceover', 'On-brand visuals'];
</script>

<section id="sample-video" class="bg-white py-20">
	<div class="container mx-auto px-4 max-w-3xl text-center">
		<SectionLabel>See it in action</SectionLabel>
		<h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 text-balance mb-4">
			Here's what a GeoLocally storefront looks like.
		</h2>
		<p class="text-gray-500 text-lg mb-10 text-pretty">
			A sample page and explainer video we built for a local business.
		</p>

		<!-- 16:9 video placeholder -->
		<div
			class="relative w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-xl mb-6"
		>
			<div class="absolute inset-0 flex flex-col items-center justify-center gap-4">
				<div
					class="w-20 h-20 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center"
				>
					<Play class="w-9 h-9 text-white fill-white ml-1" />
				</div>
				<div class="text-center">
					<p class="text-white font-semibold text-base">Sample video coming soon</p>
					<p class="text-gray-400 text-sm mt-1">
						Sample: Rodriguez Services — example local business
					</p>
				</div>
			</div>
		</div>

		<div class="flex flex-wrap justify-center gap-3">
			{#each tags as tag (tag)}
				<span
					class="bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full px-4 py-1.5 text-sm font-medium"
				>
					{tag}
				</span>
			{/each}
		</div>
	</div>
</section>
