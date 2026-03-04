<script>
	import SectionLabel from '$lib/components/ui/SectionLabel.svelte';
	import FAQItem from '$lib/components/ui/FAQItem.svelte';
	import faqs from '$lib/data/faq.json';
</script>

<section class="bg-white py-20">
	<div class="container mx-auto px-4 max-w-2xl">
		<div class="text-center mb-10">
			<SectionLabel>FAQ</SectionLabel>
			<h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 text-balance">
				Questions we hear all the time.
			</h2>
		</div>
		<div class="flex flex-col gap-2">
			{#each faqs as faq, i (i)}
				<FAQItem question={faq.question} answer={faq.answer} />
			{/each}
		</div>
	</div>
</section>
