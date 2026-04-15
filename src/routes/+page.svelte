<script>
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import StatsBar from '$lib/components/sections/StatsBar.svelte';
	import TheShiftSection from '$lib/components/sections/TheShiftSection.svelte';
	import ProblemSection from '$lib/components/sections/ProblemSection.svelte';
	import SampleVideoSection from '$lib/components/sections/SampleVideoSection.svelte';
	import WhatYouGetSection from '$lib/components/sections/WhatYouGetSection.svelte';
	import HowItWorksSection from '$lib/components/sections/HowItWorksSection.svelte';
	import WhoItsForSection from '$lib/components/sections/WhoItsForSection.svelte';
	import TestimonialsSection from '$lib/components/sections/TestimonialsSection.svelte';
	import ObjectionSection from '$lib/components/sections/ObjectionSection.svelte';
	import PricingSection from '$lib/components/sections/PricingSection.svelte';
	import FAQSection from '$lib/components/sections/FAQSection.svelte';
	import FinalCTASection from '$lib/components/sections/FinalCTASection.svelte';
</script>

<svelte:head>
	<title>GeoLocally | Landing Pages and Explainer Videos for Local Businesses</title>
	<meta
		name="description"
		content="GeoLocally builds focused landing pages and short explainer videos for local service businesses that need to be understood faster online."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://geolocally.com" />
	<meta property="og:title" content="GeoLocally | Landing Pages and Explainer Videos for Local Businesses" />
	<meta property="og:description" content="GeoLocally builds focused landing pages and short explainer videos for local service businesses that need to be understood faster online." />
	<meta property="og:image" content="https://geolocally.com/og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="GeoLocally | Landing Pages and Explainer Videos for Local Businesses" />
	<meta name="twitter:description" content="GeoLocally builds focused landing pages and short explainer videos for local service businesses that need to be understood faster online." />
	<meta name="twitter:image" content="https://geolocally.com/og-image.png" />
	<link rel="canonical" href="https://geolocally.com" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Organization",
				"name": "GeoLocally",
				"url": "https://geolocally.com",
				"logo": "https://geolocally.com/logo-dark.svg",
				"email": "hello@geolocally.com",
				"description": "GeoLocally builds focused landing pages and short explainer videos for local service businesses that need to be understood faster online.",
				"sameAs": []
			},
			{
				"@type": "Service",
				"name": "GeoLocally Digital Storefront",
				"url": "https://geolocally.com",
				"serviceType": "Focused landing pages and explainer videos for local service businesses",
				"areaServed": {
					"@type": "Country",
					"name": "United States"
				},
				"description": "Focused landing pages and short explainer videos for local service businesses that need to be understood faster online.",
				"offers": {
					"@type": "Offer",
					"price": "499",
					"priceCurrency": "USD",
					"description": "Digital Storefront starting at $499"
				},
				"provider": {
					"@type": "Organization",
					"name": "GeoLocally"
				}
			}
		]
	})}</script>`}
</svelte:head>

<HeroSection />
<StatsBar />
<TheShiftSection />
<ProblemSection />
<SampleVideoSection />
<WhatYouGetSection />
<HowItWorksSection />
<WhoItsForSection />
<TestimonialsSection />
<ObjectionSection />
<PricingSection />
<FAQSection />
<FinalCTASection />
