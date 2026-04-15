<script>
	import SectionLabel from '$lib/components/ui/SectionLabel.svelte';
</script>

<section id="what-you-get" class="bg-gray-900 text-white py-20">
	<div class="container mx-auto px-4 max-w-5xl">
		<div class="text-center mb-12">
			<SectionLabel>What You Get</SectionLabel>
			<h2 class="text-3xl md:text-4xl font-extrabold text-balance mb-4">
				Your digital storefront.
				<span class="text-indigo-400">Built to say the right thing fast.</span>
			</h2>
			<p class="text-gray-400 text-lg max-w-2xl mx-auto text-pretty">
				Everything GeoLocally builds to help customers understand you quickly and take the next
				step.
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-6">
			<!-- Card 1 -->
			<div class="bg-gray-800 border border-indigo-500/40 rounded-xl p-6 flex flex-col h-full">
				<span
					class="w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center mb-4"
				>
					1
				</span>
				<h3 class="font-bold text-base mb-3 leading-snug">A page that says what you do fast</h3>
				<p class="text-gray-400 text-sm leading-relaxed flex-1">
					So a customer can tell in seconds what you offer, where you work, and how to contact
					you. Clear headline. Clear service area. Clear next step. Built for search without
					sounding stuffed or robotic.
				</p>
				<span
					class="mt-4 w-fit bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 text-xs rounded-full px-3 py-1 font-medium"
				>
					Focused Landing Page
				</span>
			</div>

			<!-- Card 2 -->
			<div class="bg-gray-800 border border-indigo-500/40 rounded-xl p-6 flex flex-col h-full">
				<span
					class="w-8 h-8 rounded-full bg-indigo-500 text-white text-sm font-bold flex items-center justify-center mb-4"
				>
					2
				</span>
				<h3 class="font-bold text-base mb-3 leading-snug">
					A video that builds trust in 60 seconds
				</h3>
				<p class="text-gray-400 text-sm leading-relaxed flex-1">
					A 30-60 second explainer that shows what you do and why someone should call. Clear
					script, natural-sounding voiceover, strong visuals, and versions ready for your website
					and social.
				</p>
				<span
					class="mt-4 w-fit bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 text-xs rounded-full px-3 py-1 font-medium"
				>
					Custom Animated Video
				</span>
			</div>

			<!-- Card 3 — Add-on -->
			<div class="bg-gray-800 border border-emerald-500/40 rounded-xl p-6 flex flex-col h-full">
				<span
					class="w-8 h-8 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center mb-4"
				>
					+
				</span>
				<h3 class="font-bold text-base mb-3 leading-snug">Optional support after launch</h3>
				<p class="text-gray-400 text-sm leading-relaxed flex-1">
					If you want help after launch, GeoLocally can support profile updates, seasonal
					refreshes, social cutdowns, and simple reporting around what your business actually
					needs.
				</p>
				<div class="flex flex-wrap gap-2 mt-4">
					<span
						class="w-fit bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs rounded-full px-3 py-1 font-medium"
					>
						Optional add-on
					</span>
					<span
						class="w-fit bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-xs rounded-full px-3 py-1 font-medium"
					>
						Available after launch
					</span>
				</div>
			</div>
		</div>
	</div>
</section>
