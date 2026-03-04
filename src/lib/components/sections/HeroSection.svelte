<script>
	import { Check } from 'lucide-svelte';

	const trustItems = [
		'Ranks on Google + AI',
		'No agency fees',
		'Live in 3–5 business days',
		'You own your video and content. We handle hosting.'
	];
</script>

<section class="bg-gray-900 text-white">
	<div
		class="container mx-auto px-4 py-20 md:py-28 flex flex-col items-center text-center max-w-4xl"
	>
		<!-- Eyebrow -->
		<div
			class="flex items-center gap-2 mb-6 bg-gray-800 border border-gray-700 rounded-full px-4 py-1.5 text-sm text-gray-300"
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
			<span class="text-indigo-400">They're asking AI.</span>
			Are you showing up?
		</h1>

		<!-- Sub-headline -->
		<p class="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8 text-pretty">
			FoundLocal.ai builds you a video-first landing page engineered to rank on Google
			<em>and</em> get recommended by ChatGPT, Perplexity, and every AI assistant your customers use.
			One page. One video. One price. Yours forever.
		</p>

		<!-- CTAs -->
		<div class="flex flex-col sm:flex-row gap-3 mb-8">
			<a
				href="#get-started"
				class="bg-white text-gray-900 hover:bg-gray-100 font-bold text-base px-8 py-3.5 rounded-xl shadow-lg transition-colors inline-flex items-center justify-center"
			>
				Get Your Digital Storefront — $499
			</a>
			<a
				href="#how-ai-works"
				class="inline-flex items-center justify-center border-2 border-white text-white bg-transparent hover:bg-white/15 font-semibold text-base px-8 py-3.5 rounded-xl transition-colors"
			>
				See How AI Search Works
			</a>
		</div>

		<!-- Trust bar -->
		<div class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
			{#each trustItems as item (item)}
				<span class="flex items-center gap-1.5">
					<Check class="w-4 h-4 text-indigo-400" />
					{item}
				</span>
			{/each}
		</div>
	</div>
</section>
