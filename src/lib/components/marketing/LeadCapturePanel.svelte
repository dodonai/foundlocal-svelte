<script>
	let {
		title,
		body,
		buttonLabel = 'Request Your Storefront',
		href = '/#get-started',
		note = "We'll reply within 1 business day.",
		eventLabel = 'lead_panel_cta'
	} = $props();
</script>

<section class="bg-gray-900 text-white rounded-3xl border border-gray-800 p-8 md:p-10">
	<div class="max-w-3xl">
		<p class="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-400 mb-4">
			Get Started
		</p>
		<h2 class="text-3xl md:text-4xl font-extrabold text-balance mb-4">{title}</h2>
		<p class="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">{body}</p>
		<div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
			<a
				href={href}
				onclick={() =>
					typeof gtag === 'function' &&
					gtag('event', 'cta_click', {
						event_category: 'engagement',
						event_label: eventLabel
					})}
				class="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-bold text-gray-900 transition-colors hover:bg-gray-100"
			>
				{buttonLabel}
			</a>
			<p class="text-sm text-gray-400">{note}</p>
		</div>
	</div>
</section>
