<script>
	import { Check } from 'lucide-svelte';
	import GeoLocallyAnimation from '$lib/components/hero/GeoLocallyAnimation.svelte';

	const trustItems = [
		'One clear offer + service area',
		'$499 starting price',
		'Reply within 1 business day',
		'You own the video and content'
	];
</script>

<section class="bg-gray-900 text-white">
	<div
		class="container mx-auto px-4 py-20 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl"
	>
		<!-- Text Column -->
		<div class="flex flex-col max-lg:text-center max-lg:items-center">
			<!-- Eyebrow -->
			<div
				class="flex items-center gap-2 mb-6 bg-gray-800 border border-gray-700 rounded-full px-4 py-1.5 text-sm text-gray-300 w-fit"
			>
				<span class="relative flex h-2.5 w-2.5">
					<span
						class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
					></span>
					<span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
				</span>
				Now accepting local businesses nationwide
			</div>

			<!-- Headline -->
			<h1
				class="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-balance mb-6"
			>
				Your customers aren't just Googling anymore.
				<span class="text-indigo-400">They're choosing faster.</span>
				Is your business clear enough to win the call?
			</h1>

			<!-- Sub-headline -->
			<p class="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8 text-pretty">
				GeoLocally builds focused landing pages and short explainer videos for local service
				businesses. One page. One video. One clear next step. Starting at $499.
			</p>

			<!-- CTAs -->
			<div class="flex flex-col sm:flex-row gap-3 mb-8">
				<a
					href="#get-started"
					onclick={() => typeof gtag === 'function' && gtag('event', 'cta_click', { event_category: 'engagement', event_label: 'hero_get_storefront' })}
					class="bg-white text-gray-900 hover:bg-gray-100 font-bold text-base px-8 py-3.5 rounded-xl shadow-lg transition-colors inline-flex items-center justify-center"
				>
					Request Your Storefront
				</a>
				<a
					href="#how-ai-works"
					class="inline-flex items-center justify-center border-2 border-white text-white bg-transparent hover:bg-white/15 font-semibold text-base px-8 py-3.5 rounded-xl transition-colors"
				>
					See How Search Is Changing
				</a>
			</div>

			<!-- Trust bar -->
			<div
				class="flex flex-wrap max-lg:justify-center gap-x-6 gap-y-2 text-sm text-gray-400"
			>
				{#each trustItems as item (item)}
					<span class="flex items-center gap-1.5">
						<Check class="w-4 h-4 text-indigo-400" />
						{item}
					</span>
				{/each}
			</div>
		</div>

		<!-- Animation Column -->
		<div class="flex items-center justify-center">
			<GeoLocallyAnimation />
		</div>
	</div>
</section>
