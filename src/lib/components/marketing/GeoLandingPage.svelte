<script>
	import { Check } from 'lucide-svelte';
	import SectionLabel from '$lib/components/ui/SectionLabel.svelte';
	import FinalCTASection from '$lib/components/sections/FinalCTASection.svelte';

	let { page } = $props();

	function getUrl() {
		return `https://geolocally.com/${page.slug}`;
	}

	function getSchema() {
		return {
			'@context': 'https://schema.org',
			'@graph': [
				{
					'@type': 'WebPage',
					name: page.heroTitle,
					description: page.description,
					url: getUrl()
				},
				{
					'@type': 'FAQPage',
					mainEntity: page.faqs.map((faq) => ({
						'@type': 'Question',
						name: faq.question,
						acceptedAnswer: {
							'@type': 'Answer',
							text: faq.answer
						}
					}))
				}
			]
		};
	}
</script>

<svelte:head>
	<title>{page.title}</title>
	<meta name="description" content={page.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={getUrl()} />
	<meta property="og:title" content={page.title} />
	<meta property="og:description" content={page.description} />
	<meta property="og:image" content="https://geolocally.com/og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={page.title} />
	<meta name="twitter:description" content={page.description} />
	<meta name="twitter:image" content="https://geolocally.com/og-image.png" />
	<link rel="canonical" href={getUrl()} />
	{@html `<script type="application/ld+json">${JSON.stringify(getSchema())}</script>`}
</svelte:head>

<section class="bg-gray-900 text-white">
	<div class="container mx-auto max-w-6xl px-4 py-20 md:py-24">
		<div class="max-w-4xl">
			<SectionLabel>{page.locationLabel}</SectionLabel>
			<h1 class="text-4xl md:text-6xl font-extrabold leading-tight text-balance mb-6">
				{page.heroTitle}
			</h1>
			<p class="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-10">
				{page.heroBody}
			</p>
			<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
				{#each page.heroBullets as bullet (bullet)}
					<div class="rounded-2xl border border-gray-800 bg-gray-800/70 px-4 py-4 text-sm text-gray-200">
						<div class="flex items-start gap-2">
							<Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-400" />
							<span>{bullet}</span>
						</div>
					</div>
				{/each}
			</div>
				<div class="mt-10 flex flex-col gap-3 sm:flex-row">
					<a
						href="#get-started"
						onclick={() =>
							typeof gtag === 'function' &&
							gtag('event', 'cta_click', {
								event_category: 'engagement',
								event_label: `geo_primary_${page.slug}`
							})}
						class="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 font-bold text-gray-900 transition-colors hover:bg-gray-100"
					>
						Request Your Storefront
					</a>
					<a
						href="/#how-ai-works"
						onclick={() =>
							typeof gtag === 'function' &&
							gtag('event', 'cta_click', {
								event_category: 'engagement',
								event_label: `geo_secondary_${page.slug}`
							})}
						class="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
					>
						See How Search Is Changing
					</a>
				</div>
		</div>
	</div>
</section>

<section class="bg-white py-16 md:py-20">
	<div class="container mx-auto max-w-5xl px-4 space-y-10">
		{#each page.sections as section (section.title)}
			<div class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
				<h2 class="text-3xl font-extrabold text-gray-900 text-balance mb-5">{section.title}</h2>
				<div class="space-y-4 text-lg leading-relaxed text-gray-700">
					{#each section.paragraphs ?? [] as paragraph (paragraph)}
						<p>{paragraph}</p>
					{/each}
				</div>
				{#if section.list}
					{#if section.listIntro}
						<p class="mt-6 text-base font-semibold uppercase tracking-[0.18em] text-indigo-600">
							{section.listIntro}
						</p>
					{/if}
					<ul class="mt-4 grid gap-3 md:grid-cols-2">
						{#each section.list as item (item)}
							<li class="rounded-2xl bg-gray-50 px-4 py-3 text-gray-700">{item}</li>
						{/each}
					</ul>
				{/if}
				{#if section.points}
					<div class="mt-6 grid gap-4 md:grid-cols-2">
						{#each section.points as point (point.title)}
							<div class="rounded-2xl bg-gray-50 px-5 py-5">
								<h3 class="text-lg font-bold text-gray-900">{point.title}</h3>
								<p class="mt-2 text-gray-700">{point.body}</p>
							</div>
						{/each}
					</div>
				{/if}
				{#if section.outro}
					<p class="mt-6 text-lg leading-relaxed text-gray-700">{section.outro}</p>
				{/if}
			</div>
		{/each}
	</div>
</section>

<section class="bg-gray-50 py-16 md:py-20">
	<div class="container mx-auto max-w-5xl px-4">
		<div class="max-w-3xl">
			<SectionLabel>How It Works</SectionLabel>
			<h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 text-balance">
				A clearer storefront, without a bloated website project.
			</h2>
		</div>
		<div class="mt-10 grid gap-6 md:grid-cols-3">
			{#each page.process as step, index (step.title)}
				<div class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
					<p class="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-500">
						Step {index + 1}
					</p>
					<h3 class="mt-3 text-2xl font-bold text-gray-900 text-balance">{step.title}</h3>
					<p class="mt-4 text-gray-700 leading-relaxed">{step.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="bg-white py-16 md:py-20">
	<div class="container mx-auto max-w-5xl px-4">
		<div class="max-w-3xl">
			<SectionLabel>FAQ</SectionLabel>
			<h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 text-balance">
				Common questions before you fill out the form.
			</h2>
		</div>
		<div class="mt-10 grid gap-6 md:grid-cols-2">
			{#each page.faqs as faq (faq.question)}
				<div class="rounded-3xl border border-gray-200 bg-gray-50 p-8">
					<h3 class="text-xl font-bold text-gray-900 text-balance">{faq.question}</h3>
					<p class="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<FinalCTASection title={page.finalCta.title} body={page.finalCta.body} />
