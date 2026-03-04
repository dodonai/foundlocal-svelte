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
				One new job from your FoundLocal.ai page pays for itself.
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-6 mt-10 mb-8 items-start">
			<!-- Card 1 — Digital Storefront -->
			<div class="border border-gray-200 rounded-2xl shadow-sm bg-white">
				<div class="p-7 flex flex-col h-full">
					<h3 class="font-bold text-gray-900 text-xl mb-1">Digital Storefront</h3>
					<p class="text-gray-500 text-sm mb-5">
						Everything you need to get found — on Google and AI
					</p>

					<p class="text-5xl font-extrabold text-gray-900 leading-none">$499</p>
					<p class="text-sm text-gray-400 mt-1 mb-4">one-time setup</p>

					<hr class="border-gray-200 mb-4" />

					<p class="text-sm font-semibold text-gray-700 mb-5">Then $49/mo to keep it live</p>

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
						class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl text-base transition-colors text-center block"
					>
						Get Your Storefront — $499
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
					<p class="text-gray-500 text-sm mb-5">
						Everything in Digital Storefront, plus full autopilot
					</p>

					<p class="text-5xl font-extrabold text-gray-900 leading-none">$149</p>
					<p class="text-sm text-gray-400 mt-1 mb-1">/month</p>
					<p class="text-xs text-gray-400 mb-4">+ $499 one-time setup</p>

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
						class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl text-base transition-colors text-center block"
					>
						Start Growing — $149/mo
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
					<p class="text-slate-400 text-sm mb-5">
						For businesses that want a full digital marketing partner
					</p>

					<p class="text-5xl font-extrabold text-white leading-none">Custom</p>
					<p class="text-sm text-slate-400 mt-1 mb-5">pricing</p>

					<p class="text-slate-300 text-sm leading-relaxed mb-5">
						Everything in Growth, plus human-crafted content, strategy calls, additional video
						production, multi-location support, and custom integrations. We'll build a plan
						around what your business actually needs.
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
							class="w-full border-2 border-amber-500 text-amber-400 hover:bg-amber-500/10 font-bold py-3.5 rounded-xl text-base transition-colors text-center block"
						>
							Contact Us
						</a>
						<p class="text-center text-xs text-slate-500 mt-3">
							We'll follow up within 1 business day.
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Agency comparison -->
		<p class="text-center text-xs text-gray-400 mb-6">
			For comparison: Yelp ads cost $10,000+/year. An SEO agency: $500–$1,500/mo. A video studio:
			$5,000–$25,000. Your FoundLocal.ai storefront starts at $499 + $49/mo. Full growth plan:
			$149/mo.
		</p>

		<!-- Guarantee -->
		<div class="border-l-4 border-emerald-500 bg-emerald-50 rounded-xl p-6">
			<div class="flex items-start gap-3">
				<ShieldCheck class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
				<div>
					<h4 class="font-bold text-gray-900 text-sm mb-1">Our promise</h4>
					<p class="text-gray-600 text-sm leading-relaxed">
						Your page goes live in 5 business days or we refund your setup fee in full. Not happy
						with the video? We redo it. Growth and Enterprise plans are month-to-month — cancel
						anytime, no contracts, no fees.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
