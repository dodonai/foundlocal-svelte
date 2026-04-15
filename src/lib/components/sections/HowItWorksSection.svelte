<script>
	import SectionLabel from '$lib/components/ui/SectionLabel.svelte';

	const steps = [
		{
			num: '1',
			title: 'Tell us the basics',
			body: "Share your business name, location, services, and phone number. If you already have a website, send the link and we'll pull what we need."
		},
		{
			num: '2',
			title: 'We review the opportunity',
			body: 'We look at your business, market, and goals, then reply with the best next step.'
		},
		{
			num: '3',
			title: 'We build your storefront',
			body: 'After kickoff, we build the page, script, video, and launch package. First draft is usually ready in 3-5 business days.'
		}
	];
</script>

<section id="how-it-works" class="bg-white py-20">
	<div class="container mx-auto px-4 max-w-4xl">
		<div class="text-center mb-12">
			<SectionLabel>How It Works</SectionLabel>
			<h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 text-balance mb-4">
				Three steps. No bloated website project.
			</h2>
			<p class="text-gray-500 text-lg">
				Tell us the basics. GeoLocally handles the rest.
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
