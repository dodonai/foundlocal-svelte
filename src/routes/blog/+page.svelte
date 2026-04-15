<script>
	import LeadCapturePanel from '$lib/components/marketing/LeadCapturePanel.svelte';
	import SectionLabel from '$lib/components/ui/SectionLabel.svelte';
	import { blogPosts } from '$lib/content/blog-posts';
</script>

<svelte:head>
	<title>GeoLocally Blog | Clearer Websites, Better Local Search</title>
	<meta
		name="description"
		content="Practical guidance for local businesses that want clearer websites, better local search visibility, and stronger first impressions online."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://geolocally.com/blog" />
	<meta property="og:title" content="GeoLocally Blog | Clearer Websites, Better Local Search" />
	<meta
		property="og:description"
		content="Practical guidance for local businesses that want clearer websites, better local search visibility, and stronger first impressions online."
	/>
	<meta property="og:image" content="https://geolocally.com/og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="GeoLocally Blog | Clearer Websites, Better Local Search" />
	<meta
		name="twitter:description"
		content="Practical guidance for local businesses that want clearer websites, better local search visibility, and stronger first impressions online."
	/>
	<meta name="twitter:image" content="https://geolocally.com/og-image.png" />
	<link rel="canonical" href="https://geolocally.com/blog" />
</svelte:head>

<section class="bg-gray-900 text-white">
	<div class="container mx-auto max-w-6xl px-4 py-20 md:py-24">
		<div class="max-w-4xl">
			<SectionLabel>Insights</SectionLabel>
			<h1 class="text-4xl md:text-6xl font-extrabold leading-tight text-balance mb-6">
				Straight talk on local search, clearer websites, and getting chosen faster.
			</h1>
			<p class="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
				These articles break down what is changing in search, what local businesses should fix
				first, and how to make your business easier to trust online.
			</p>
		</div>
	</div>
</section>

<section class="bg-white py-16 md:py-20">
	<div class="container mx-auto max-w-6xl px-4">
		<div class="grid gap-6 md:grid-cols-2">
			{#each blogPosts as post (post.slug)}
				<article class="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
					<img
						src={post.coverImage}
						alt={post.coverAlt}
						class="aspect-[1200/630] w-full rounded-2xl border border-gray-200 object-cover"
						loading="lazy"
					/>
					<div class="mt-5 flex flex-wrap gap-3 text-sm text-gray-500">
						<span class="font-semibold uppercase tracking-[0.18em] text-indigo-500">
							{post.category}
						</span>
						<span aria-hidden="true">•</span>
						<span>{post.displayDate}</span>
						<span aria-hidden="true">•</span>
						<span>{post.readingTime}</span>
					</div>
					<h2 class="mt-5 text-3xl font-extrabold text-gray-900 text-balance">
						<a href={`/blog/${post.slug}`} class="transition-colors hover:text-indigo-600">
							{post.title}
						</a>
					</h2>
					<p class="mt-4 text-lg leading-relaxed text-gray-700">{post.description}</p>
					<a
						href={`/blog/${post.slug}`}
						class="mt-8 inline-flex items-center font-bold text-indigo-600 transition-colors hover:text-indigo-700"
					>
						Read article →
					</a>
				</article>
			{/each}
		</div>

		<div class="mt-16">
			<LeadCapturePanel
				title="Want a storefront that makes your business easier to understand online?"
				body="Tell us what you do and where you work. If GeoLocally can help, we'll reply with the next step within 1 business day."
				eventLabel="blog_index_lead_panel"
			/>
		</div>
	</div>
</section>
