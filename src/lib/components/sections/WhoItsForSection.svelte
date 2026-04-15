<script>
	import { X } from 'lucide-svelte';
	import SectionLabel from '$lib/components/ui/SectionLabel.svelte';
	import trades from '$lib/data/trades.json';

	const notFor = [
		{
			title: 'Not a DIY website builder',
			body: "You don't touch Wix or WordPress. We handle everything."
		},
		{
			title: 'Not a generic AI video tool',
			body: 'No cheap slideshows. No robotic voice. Just a clear script, natural-sounding voiceover, and visuals reviewed before delivery.'
		},
		{
			title: 'Not a monthly retainer trap',
			body: 'One price to start. You own the video and content. Ongoing help is optional.'
		}
	];
</script>

<section class="bg-gray-50 py-20">
	<div class="container mx-auto px-4 max-w-5xl">
		<div class="text-center mb-12">
			<SectionLabel>Built For</SectionLabel>
			<h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 text-balance mb-4">
				Local businesses that run on reputation and referrals.
			</h2>
			<p class="text-gray-500 text-lg max-w-2xl mx-auto text-pretty">
				If customers usually find you through local search, referrals, or comparison shopping,
				GeoLocally was made for you.
			</p>
		</div>

		<div class="grid grid-cols-3 md:grid-cols-9 gap-4 mb-12">
			{#each trades as trade (trade.label)}
				<div
					class="flex flex-col items-center gap-2 bg-white border border-gray-200 rounded-xl py-4 px-2 text-center shadow-sm"
				>
					<span class="text-2xl" role="img" aria-label={trade.label}>{trade.icon}</span>
					<span class="text-xs font-medium text-gray-600">{trade.label}</span>
				</div>
			{/each}
		</div>

		<div class="bg-gray-900 rounded-2xl p-8">
			<p class="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6 text-center">
				What this is NOT
			</p>
			<div class="grid md:grid-cols-3 gap-6">
				{#each notFor as item (item.title)}
					<div>
						<div class="flex items-center gap-2 mb-2">
							<X class="w-4 h-4 text-red-400 flex-shrink-0" />
							<h4 class="font-bold text-white text-sm">{item.title}</h4>
						</div>
						<p class="text-gray-400 text-sm leading-relaxed">{item.body}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
