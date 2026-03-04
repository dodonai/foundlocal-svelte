<script>
	import SectionLabel from '$lib/components/ui/SectionLabel.svelte';
</script>

<section id="what-you-get" class="bg-gray-900 text-white py-20">
	<div class="container mx-auto px-4 max-w-5xl">
		<div class="text-center mb-12">
			<SectionLabel>What You Get</SectionLabel>
			<h2 class="text-3xl md:text-4xl font-extrabold text-balance mb-4">
				Your complete digital storefront.
				<span class="text-indigo-400">Built for Google AND AI.</span>
			</h2>
			<p class="text-gray-400 text-lg max-w-2xl mx-auto text-pretty">
				Everything you need to show up everywhere your customers search — in one package, one
				price.
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
				<h3 class="font-bold text-base mb-3 leading-snug">
					A page that ranks on Google AND gets recommended by AI
				</h3>
				<p class="text-gray-400 text-sm leading-relaxed flex-1">
					So your business can show up when someone Googles &ldquo;local service near me&rdquo; or
					asks ChatGPT &ldquo;Who&rsquo;s the best local business near me?&rdquo; Connected to your
					Google Business Profile. Mobile-first. Fast.
				</p>
				<span
					class="mt-4 w-fit bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 text-xs rounded-full px-3 py-1 font-medium"
				>
					SEO + AEO Landing Page
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
					A 30–60 second animated explainer that clearly shows what you do and why customers should
					call you. Streamlined production with quality checks — a natural-sounding voiceover and
					on-brand visuals. Not a basic slideshow or generic stock footage montage. Delivered in
					formats ready for your website, Instagram, TikTok, Facebook, and YouTube.
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
				<h3 class="font-bold text-base mb-3 leading-snug">
					Keep your Google profile active on autopilot
				</h3>
				<p class="text-gray-400 text-sm leading-relaxed flex-1">
					We auto-publish weekly posts to your Google Business Profile, generate social media
					templates, and send you a monthly performance report — all on autopilot. Active profiles
					tend to rank higher on both Google and AI recommendations. Cancel anytime.
				</p>
				<div class="flex flex-wrap gap-2 mt-4">
					<span
						class="w-fit bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs rounded-full px-3 py-1 font-medium"
					>
						Optional — from $149/mo
					</span>
					<span
						class="w-fit bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-xs rounded-full px-3 py-1 font-medium"
					>
						Most popular add-on
					</span>
				</div>
			</div>
		</div>
	</div>
</section>
