<script>
	import { Check } from 'lucide-svelte';

	let submitted = $state(false);

	const businessTypes = [
		'Home services (plumbing, HVAC, roofing, etc.)',
		'Health & wellness (dental, chiropractic, clinic, etc.)',
		'Professional services (law, accounting, consulting, etc.)',
		'Personal services (salon, spa, grooming, etc.)',
		'Auto services (repair, detailing, etc.)',
		'Hospitality & food (café, restaurant, catering, etc.)',
		'Retail (shop, showroom, boutique, etc.)',
		'Nonprofit / community organization',
		'Other'
	];

	const referralSources = [
		'Google search',
		'Facebook',
		'Referral',
		'Yelp',
		'Trade show',
		'Other'
	];

	function handleSubmit(e) {
		e.preventDefault();
		submitted = true;
	}
</script>

<section id="get-started" class="bg-gray-900 text-white py-20">
	<div class="container mx-auto px-4 max-w-xl">
		{#if submitted}
			<div class="text-center">
				<div
					class="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center mx-auto mb-6"
				>
					<Check class="w-7 h-7 text-white" />
				</div>
				<h2 class="text-3xl font-extrabold mb-4 text-balance">
					You're on your way to getting found.
				</h2>
				<p class="text-gray-300 text-lg leading-relaxed">
					We'll be in touch within 1 business day to get started on your digital storefront.
				</p>
			</div>
		{:else}
			<div class="text-center mb-10">
				<h2 class="text-3xl md:text-4xl font-extrabold text-balance mb-4">
					Your competitor is already showing up on Google.
					<span class="text-indigo-400">Soon they'll show up on ChatGPT too.</span>
				</h2>
				<p class="text-gray-300 text-lg text-pretty leading-relaxed">
					Get there first. Tell us about your business — we'll have your digital storefront live
					in 3–5 business days.
				</p>
			</div>

			<form onsubmit={handleSubmit} class="flex flex-col gap-3">
				<input
					required
					type="text"
					placeholder="Your name (e.g. Mike Rodriguez)"
					class="w-full bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
				<input
					required
					type="email"
					placeholder="Email address"
					class="w-full bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
				<input
					type="tel"
					placeholder="Phone number (optional)"
					class="w-full bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
				<input
					required
					type="text"
					placeholder="Business name and city (e.g. Rodriguez Services, Austin TX or Bright Smiles Dental, Phoenix AZ)"
					class="w-full bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
				<select
					required
					class="w-full rounded-xl bg-gray-800 border border-gray-700 text-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
				>
					<option value="" disabled selected>What type of business?</option>
					{#each businessTypes as type (type)}
						<option value={type}>{type}</option>
					{/each}
				</select>
				<input
					type="url"
					placeholder="Website URL — optional (https://...)"
					class="w-full bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
				<select
					class="w-full rounded-xl bg-gray-800 border border-gray-700 text-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
				>
					<option value="" disabled selected>How did you hear about us? — optional</option>
					{#each referralSources as source (source)}
						<option value={source}>{source}</option>
					{/each}
				</select>

				<button
					type="submit"
					class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl text-base mt-2 transition-colors"
				>
					Get My Digital Storefront — $499
				</button>
				<p class="text-center text-xs text-gray-400">
					We don't consider the project finished until you approve the final product. We follow up
					within 1 business day.
				</p>
			</form>
		{/if}
	</div>
</section>
