<script>
	import SectionLabel from '$lib/components/ui/SectionLabel.svelte';

	const steps = [
		{
			num: '1',
			title: 'Tell us your business',
			body: "Share your business name, location, services, and phone number. Have a website? Just send the link — we pull what we need."
		},
		{
			num: '2',
			title: 'We build your storefront',
			body: 'We generate your SEO + AEO optimized landing page, write your video script, produce your animated explainer with a natural-sounding voiceover, add structured data for AI engines, and package it all together.'
		},
		{
			num: '3',
			title: 'Go live and get found',
			body: "Your digital storefront goes live in 3–5 business days. You're set up to show up on Google and to be a strong candidate for AI recommendations. Share your URL, link it from your Google Business Profile, post the video on social — it's all yours."
		}
	];
</script>

<section id="how-it-works" class="bg-white py-20">
	<div class="container mx-auto px-4 max-w-4xl">
		<div class="text-center mb-12">
			<SectionLabel>How It Works</SectionLabel>
			<h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 text-balance mb-4">
				Three steps. Three to five days. Zero headaches.
			</h2>
			<p class="text-gray-500 text-lg">
				No creative briefs. No strategy calls. No learning curve.
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8">
			{#each steps as step, i (i)}
				<div class="flex flex-col items-center text-center">
					<div
						class="w-12 h-12 rounded-full bg-indigo-600 text-white text-xl font-extrabold flex items-center justify-center mb-5 shadow-lg"
					>
						{step.num}
					</div>
					<h3 class="font-bold text-gray-900 text-base mb-2">{step.title}</h3>
					<p class="text-gray-500 text-sm leading-relaxed">{step.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
