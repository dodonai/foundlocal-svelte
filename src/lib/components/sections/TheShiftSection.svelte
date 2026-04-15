<script>
	import SectionLabel from '$lib/components/ui/SectionLabel.svelte';

	const oldWay = [
		'Customer Googles "local service near me"',
		'Compares a few links and listings',
		'Calls the business that looks clearest'
	];

	const newWay = [
		'Customer asks a full question in Google, Maps, or another search tool',
		'The result compares businesses using public web and business info',
		'The clearest, most trustworthy option gets more attention'
	];
</script>

<section id="how-ai-works" class="bg-white py-20">
	<div class="container mx-auto px-4 max-w-5xl">
		<div class="text-center mb-12">
			<SectionLabel>The shift is happening</SectionLabel>
			<h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 text-balance mb-4">
				Search is getting faster.
			</h2>
			<p class="text-gray-500 text-lg max-w-2xl mx-auto text-pretty">
				People are asking fuller questions and expecting quicker answers. That does not replace
				SEO. It makes clarity matter more.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-6 mb-10">
			<!-- Old way -->
			<div class="bg-gray-50 border border-gray-200 rounded-xl p-7">
				<p class="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
					How search used to work
				</p>
				<div class="flex flex-col gap-3">
					{#each oldWay as step, i (i)}
						<div class="flex items-start gap-3">
							<span
								class="w-6 h-6 rounded-full bg-gray-200 text-gray-500 text-xs flex items-center justify-center flex-shrink-0 font-bold mt-0.5"
							>
								{i + 1}
							</span>
							<p class="text-gray-600 text-sm leading-relaxed">{step}</p>
						</div>
					{/each}
				</div>
					<p class="mt-5 text-xs text-gray-400 border-t border-gray-200 pt-4">
						Local SEO still matters here
					</p>
			</div>

			<!-- New way -->
			<div class="bg-indigo-50 border-2 border-indigo-400 rounded-xl p-7 shadow-sm">
				<p class="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-5">
					How search works now
				</p>
				<div class="flex flex-col gap-3">
					{#each newWay as step, i (i)}
						<div class="flex items-start gap-3">
							<span
								class="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center flex-shrink-0 font-bold mt-0.5"
							>
								{i + 1}
							</span>
							<p class="text-gray-700 text-sm leading-relaxed font-medium">{step}</p>
						</div>
					{/each}
				</div>
				<p class="mt-5 text-xs text-indigo-600 font-semibold border-t border-indigo-200 pt-4">
					Clear information matters more in faster search results
				</p>
			</div>
		</div>

		<div class="text-center bg-gray-900 text-white rounded-xl py-6 px-8">
			<p class="text-base md:text-lg font-bold text-pretty">
				GeoLocally gives your business a clearer front door online: what you do, where you work,
				why people should trust you, and what to do next.
				<span class="text-indigo-400">That matters because unclear businesses get skipped.</span>
			</p>
		</div>
	</div>
</section>
