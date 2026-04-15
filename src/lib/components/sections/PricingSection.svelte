<script>
	import { Check, ShieldCheck } from 'lucide-svelte';
	import SectionLabel from '$lib/components/ui/SectionLabel.svelte';
	import pricing from '$lib/data/pricing.json';
</script>

<section id="pricing" class="bg-gray-50 py-20">
	<div class="container mx-auto px-4 max-w-6xl">
		<div class="text-center mb-4">
			<SectionLabel>Simple Pricing</SectionLabel>
			<h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 text-balance mb-4">
				One page. One video. One price to start.
			</h2>
			<p class="text-base font-bold text-gray-800">
				A sharp first move for businesses that need to look clearer online fast.
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-6 mt-10 mb-8 items-start">
			<!-- Card 1 — Digital Storefront -->
			<div class="border border-gray-200 rounded-2xl shadow-sm bg-white">
				<div class="p-7 flex flex-col h-full">
					<h3 class="font-bold text-gray-900 text-xl mb-1">Digital Storefront</h3>
					<p class="text-gray-500 text-sm mb-5">Focused landing page + explainer video</p>

					<p class="text-5xl font-extrabold text-gray-900 leading-none">$499</p>
					<p class="text-sm text-gray-400 mt-1 mb-4">starting point</p>

					<hr class="border-gray-200 mb-4" />

					<p class="text-sm font-semibold text-gray-700 mb-5">
						Tell us about your business. If GeoLocally can help, we'll reply with the next step.
					</p>

					<ul class="flex flex-col gap-2.5 mb-8 flex-1">
						{#each pricing.coreFeatures as f (f)}
							<li class="flex items-start gap-2.5 text-sm text-gray-700">
								<Check class="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
								{f}
							</li>
						{/each}
					</ul>
					<a
						href="#get-started"
						onclick={() => typeof gtag === 'function' && gtag('event', 'cta_click', { event_category: 'engagement', event_label: 'pricing_digital_storefront' })}
						class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl text-base transition-colors text-center block"
					>
						Request This Plan
					</a>
				</div>
			</div>

			<!-- Card 2 — Growth (RECOMMENDED) -->
			<div class="border-2 border-indigo-500 rounded-2xl shadow-xl relative bg-white">
				<div class="absolute -top-3.5 left-1/2 -translate-x-1/2">
					<span
						class="bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow inline-block"
					>
						RECOMMENDED
					</span>
				</div>
				<div class="p-7 pt-8 flex flex-col h-full">
					<h3 class="font-bold text-gray-900 text-xl mb-1">Growth</h3>
					<p class="text-gray-500 text-sm mb-5">Keep the storefront active after launch</p>

					<p class="text-5xl font-extrabold text-gray-900 leading-none">From $149</p>
					<p class="text-sm text-gray-400 mt-1 mb-1">monthly support</p>
					<p class="text-xs text-gray-400 mb-4">priced around scope</p>

					<p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
						Everything in Digital Storefront, plus:
					</p>
					<ul class="flex flex-col gap-2.5 mb-8 flex-1">
						{#each pricing.growthFeatures as f (f)}
							<li class="flex items-start gap-2.5 text-sm text-gray-700">
								<Check class="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
								{f}
							</li>
						{/each}
					</ul>
					<a
						href="#get-started"
						onclick={() => typeof gtag === 'function' && gtag('event', 'cta_click', { event_category: 'engagement', event_label: 'pricing_growth' })}
						class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl text-base transition-colors text-center block"
					>
						Ask About Growth
					</a>
				</div>
			</div>

			<!-- Card 3 — Enterprise -->
			<div class="border border-slate-700 bg-slate-800 rounded-2xl shadow-sm relative">
				<div class="absolute -top-3.5 left-1/2 -translate-x-1/2">
					<span
						class="bg-amber-500 text-slate-900 text-xs font-bold px-4 py-1 rounded-full shadow inline-block"
					>
						CUSTOM
					</span>
				</div>
				<div class="p-7 pt-8 flex flex-col h-full">
					<h3 class="font-bold text-white text-xl mb-1">Enterprise</h3>
					<p class="text-slate-400 text-sm mb-5">For businesses that want a hands-on marketing partner</p>

					<p class="text-5xl font-extrabold text-white leading-none">Custom</p>
					<p class="text-sm text-slate-400 mt-1 mb-5">pricing</p>

					<p class="text-slate-300 text-sm leading-relaxed mb-5">
						Everything in Growth, plus human-written content, strategy support, extra video
						production, multi-location work, and custom requests. GeoLocally builds around what
						your business actually needs.
					</p>

					<ul class="flex flex-col gap-2 mb-8 flex-1">
						{#each pricing.enterpriseItems as item (item)}
							<li class="flex items-start gap-2 text-sm text-slate-300">
								<span class="text-slate-500 flex-shrink-0 mt-0.5">—</span>
								{item}
							</li>
						{/each}
					</ul>

					<div>
						<a
							href="#get-started"
							onclick={() => typeof gtag === 'function' && gtag('event', 'cta_click', { event_category: 'engagement', event_label: 'pricing_enterprise' })}
							class="w-full border-2 border-amber-500 text-amber-400 hover:bg-amber-500/10 font-bold py-3.5 rounded-xl text-base transition-colors text-center block"
						>
							Talk to Us
						</a>
						<p class="text-center text-xs text-slate-500 mt-3">
							We'll reply within 1 business day.
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Agency comparison -->
		<p class="text-center text-xs text-gray-400 mb-6">
			For comparison: Yelp ads can cost $10,000+/year. Many SEO retainers start at $500-$1,500/mo.
			Video production often costs $5,000+. GeoLocally starts at $499.
		</p>

		<!-- Guarantee -->
		<div class="border-l-4 border-emerald-500 bg-emerald-50 rounded-xl p-6">
			<div class="flex items-start gap-3">
				<ShieldCheck class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
				<div>
					<h4 class="font-bold text-gray-900 text-sm mb-1">Our promise</h4>
					<p class="text-gray-600 text-sm leading-relaxed">
						GeoLocally reviews every request before kickoff. If this is not the right move for
						your business, we'll say so. If the final page has factual mistakes, we fix them
						before launch.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
