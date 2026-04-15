<script>
	import LeadCapturePanel from '$lib/components/marketing/LeadCapturePanel.svelte';

	let { post, children } = $props();

	function getUrl() {
		return `https://geolocally.com/blog/${post.slug}`;
	}

	function getImageUrl() {
		return `https://geolocally.com${post.coverImage}`;
	}

	function getSchema() {
		return {
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: post.title,
			description: post.description,
			datePublished: post.published,
			dateModified: post.published,
			mainEntityOfPage: getUrl(),
			author: {
				'@type': 'Organization',
				name: 'GeoLocally'
			},
			publisher: {
				'@type': 'Organization',
				name: 'GeoLocally',
				logo: {
					'@type': 'ImageObject',
					url: 'https://geolocally.com/logo-dark.svg'
				}
			},
			image: getImageUrl()
		};
	}
</script>

<svelte:head>
	<title>{post.title} — GeoLocally</title>
	<meta name="description" content={post.description} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={getUrl()} />
	<meta property="og:title" content={post.title} />
	<meta property="og:description" content={post.description} />
	<meta property="og:image" content={getImageUrl()} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={post.title} />
	<meta name="twitter:description" content={post.description} />
	<meta name="twitter:image" content={getImageUrl()} />
	<link rel="canonical" href={getUrl()} />
	{@html `<script type="application/ld+json">${JSON.stringify(getSchema())}</script>`}
</svelte:head>

<section class="bg-gray-900 text-white">
	<div class="container mx-auto max-w-4xl px-4 py-20 md:py-24">
		<a
			href="/blog"
			class="inline-flex items-center text-sm font-semibold text-indigo-300 transition-colors hover:text-indigo-200"
		>
			← Back to Blog
		</a>
		<div class="mt-8">
			<p class="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-400 mb-4">
				{post.category}
			</p>
			<h1 class="text-4xl md:text-5xl font-extrabold text-balance leading-tight mb-6">
				{post.title}
			</h1>
			<p class="text-lg text-gray-300 leading-relaxed max-w-3xl">{post.description}</p>
			<div class="mt-8 flex flex-wrap gap-3 text-sm text-gray-400">
				<span>{post.displayDate}</span>
				<span aria-hidden="true">•</span>
				<span>{post.readingTime}</span>
			</div>
			<img
				src={post.coverImage}
				alt={post.coverAlt}
				class="mt-10 aspect-[1200/630] w-full rounded-3xl border border-gray-800 object-cover shadow-2xl"
				loading="eager"
			/>
		</div>
	</div>
</section>

<section class="bg-white py-16 md:py-20">
	<div class="container mx-auto max-w-3xl px-4">
		<article class="prose prose-lg prose-gray max-w-none prose-headings:font-extrabold prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900">
			{@render children()}
		</article>

		<div class="mt-16">
			<LeadCapturePanel
				title="Want a storefront that helps people understand your business faster?"
				body="GeoLocally builds focused landing pages and short explainer videos for local service businesses. Tell us what you do and where you work, and we'll reply with the next step."
				eventLabel={`blog_post_${post.slug}_lead_panel`}
			/>
		</div>
	</div>
</section>
